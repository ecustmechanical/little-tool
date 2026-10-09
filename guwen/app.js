/* 高中古文私教 — 前端逻辑
 * 安全：前端不持有任何 API 密钥；只与自己的后端代理通信（config.js 里的 apiBase）。
 * 身份：匿名 UUID 存 localStorage，免注册。
 */
(function () {
  'use strict';

  var API = (window.GW_CONFIG && window.GW_CONFIG.apiBase) || '';
  var chatEl = document.getElementById('chat');
  var input = document.getElementById('input');
  var sendBtn = document.getElementById('sendBtn');
  var typing = document.getElementById('typing');
  var statusLine = document.getElementById('statusLine');
  var quotaHint = document.getElementById('quotaHint');

  // ---- 匿名身份 ----
  function getId() {
    var id = null;
    try { id = localStorage.getItem('gw_id'); } catch (e) {}
    if (!id) {
      id = (window.crypto && crypto.randomUUID)
        ? crypto.randomUUID()
        : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0;
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
          });
      try { localStorage.setItem('gw_id', id); } catch (e) {}
    }
    return id;
  }

  // ---- 渲染 ----
  function escapeHtml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function renderMd(text) {
    var html = escapeHtml(text);
    // 行内代码
    html = html.replace(/`([^`\n]+)`/g, '<code>$1</code>');
    // 粗体
    html = html.replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>');
    // 【答案】高亮
    html = html.replace(/【(答案|解析|参考答案)】/g, '<span class="answer">【$1】</span>');
    // 有序/无序列表（简单逐行）
    var lines = html.split('\n');
    var out = [], inOl = false, inUl = false;
    function closeList() {
      if (inOl) { out.push('</ol>'); inOl = false; }
      if (inUl) { out.push('</ul>'); inUl = false; }
    }
    for (var i = 0; i < lines.length; i++) {
      var ln = lines[i];
      var mOl = ln.match(/^\s*(\d+)[.、)]\s*(.*)$/);
      var mUl = ln.match(/^\s*[-•·]\s*(.*)$/);
      if (mOl) {
        if (!inOl) { closeList(); out.push('<ol>'); inOl = true; }
        out.push('<li>' + mOl[2] + '</li>');
      } else if (mUl) {
        if (!inUl) { closeList(); out.push('<ul>'); inUl = true; }
        out.push('<li>' + mUl[1] + '</li>');
      } else if (ln.trim() === '') {
        out.push('<br>');
      } else {
        closeList();
        out.push('<p>' + ln + '</p>');
      }
    }
    closeList();
    return out.join('');
  }

  function addMsg(role, text) {
    var wrap = document.createElement('div');
    wrap.className = 'msg ' + role;
    var b = document.createElement('div');
    b.className = 'bubble';
    if (role === 'tutor') b.innerHTML = renderMd(text);
    else b.textContent = text;
    wrap.appendChild(b);
    chatEl.appendChild(wrap);
    scrollBottom();
    return wrap;
  }

  function addSys(text) {
    var d = document.createElement('div');
    d.className = 'sysline';
    d.textContent = text;
    chatEl.appendChild(d);
    scrollBottom();
  }

  function scrollBottom() {
    chatEl.scrollTop = chatEl.scrollHeight;
  }

  // ---- 网络 ----
  function api(path, opts) {
    if (!API || API.indexOf('__API_BASE__') >= 0) {
      return Promise.reject(new Error('后端接口尚未接入（部署中），稍后再试'));
    }
    opts = opts || {};
    var headers = { 'X-Learner-Id': getId() };
    if (opts.body) headers['Content-Type'] = 'application/json';
    return fetch(API + path, {
      method: opts.method || 'GET',
      headers: headers,
      body: opts.body ? JSON.stringify(opts.body) : undefined,
    }).then(function (resp) {
      return resp.json().catch(function () { return {}; }).then(function (data) {
        if (!resp.ok) {
          var e = new Error(data.error || ('请求失败 (' + resp.status + ')'));
          e.code = data.code || '';
          e.status = resp.status;
          throw e;
        }
        return data;
      });
    });
  }

  // ---- 会话状态 ----
  var sending = false;
  var profile = null;

  function setLoading(on) {
    sending = on;
    sendBtn.disabled = on;
    typing.hidden = !on;
    if (on) scrollBottom();
  }

  function send(text) {
    text = (text || '').trim();
    if (!text || sending) return;
    addMsg('user', text);
    input.value = '';
    autoGrow();
    setLoading(true);
    statusLine.textContent = '老师正在作答…';

    api('/chat', { method: 'POST', body: { message: text } })
      .then(function (d) {
        addMsg('tutor', d.reply);
        if (d.profile) { profile = d.profile; saveCache(profile); renderProfile(); }
        statusLine.textContent = '个性化学习智能体 · 免注册';
      })
      .catch(function (e) {
        if (e.code === 'IP_RATE' || e.code === 'ID_RATE' || e.code === 'DAILY') {
          addSys(e.message);
        } else if (e.status === 400 && e.code === 'NO_ID') {
          try { localStorage.removeItem('gw_id'); } catch (err) {}
          addSys('身份标识异常，已重置，请再发一次');
        } else if (e.message && e.message.indexOf('Failed to fetch') >= 0) {
          addSys('网络开小差了，请检查网络后重试');
        } else {
          addSys(e.message || '出了点小问题，请稍后重试');
        }
        statusLine.textContent = '个性化学习智能体 · 免注册';
      })
      .then(function () { setLoading(false); input.focus(); });
  }

  // ---- 学习档案 ----
  function saveCache(p) {
    try { localStorage.setItem('gw_cache', JSON.stringify(p)); } catch (e) {}
  }
  function loadCache() {
    try { return JSON.parse(localStorage.getItem('gw_cache') || 'null'); } catch (e) { return null; }
  }

  var MODE_ORDER = ['翻译', '实词虚词', '句式', '课文讲解', '出题', '闲聊'];

  function renderProfile() {
    if (!profile) return;
    document.getElementById('statStreak').textContent = profile.streakDays || 0;
    document.getElementById('statQuestions').textContent = profile.questionsDone || 0;
    document.getElementById('statLessons').textContent =
      Object.keys(profile.lessons || {}).length;
    document.getElementById('statToday').textContent = profile.dayCount || 0;

    var modes = profile.modes || {};
    var max = 1;
    MODE_ORDER.forEach(function (m) { if ((modes[m] || 0) > max) max = modes[m]; });
    var any = Object.keys(modes).length > 0;
    var bars = document.getElementById('modeBars');
    bars.innerHTML = '';
    if (!any) {
      bars.innerHTML = '<p class="empty">还没有记录，去聊几句吧～</p>';
    } else {
      MODE_ORDER.forEach(function (m) {
        var v = modes[m] || 0;
        if (!v) return;
        var row = document.createElement('div');
        row.className = 'bar-row';
        row.innerHTML = '<span class="label">' + m + '</span>' +
          '<span class="track"><span class="fill" style="width:' +
          Math.round(v / max * 100) + '%"></span></span>' +
          '<span class="num">' + v + '</span>';
        bars.appendChild(row);
      });
    }

    var weak = profile.weak || [];
    var tags = document.getElementById('weakTags');
    tags.innerHTML = '';
    if (!weak.length) {
      tags.innerHTML = '<p class="empty">暂无，继续保持</p>';
    } else {
      weak.forEach(function (w) {
        var t = document.createElement('span');
        t.className = 'tag';
        t.textContent = w;
        tags.appendChild(t);
      });
    }
    document.getElementById('lastLesson').textContent =
      profile.lastLesson ? '《' + profile.lastLesson + '》' : '—';
  }

  function syncState() {
    api('/state').then(function (d) {
      if (d.profile) { profile = d.profile; saveCache(profile); renderProfile(); }
      var msgs = (d.history && d.history.messages) || [];
      if (msgs.length) {
        // 恢复历史：清掉欢迎语后重放
        var savedTyping = typing.hidden;
        chatEl.innerHTML = '';
        msgs.forEach(function (m) {
          addMsg(m.role === 'assistant' ? 'tutor' : 'user', m.content);
        });
        typing.hidden = savedTyping;
        if (d.limits) quotaHint.textContent =
          '每日额度 ' + d.limits.DAILY_QUOTA + ' 条 · AI 生成内容仅供参考，请以课本为准';
      }
      statusLine.textContent = '已同步你的学习档案 · 免注册';
      setTimeout(function () {
        statusLine.textContent = '个性化学习智能体 · 免注册';
      }, 2500);
    }).catch(function () {
      statusLine.textContent = '个性化学习智能体 · 免注册（离线缓存）';
    });
  }

  // ---- 事件 ----
  sendBtn.addEventListener('click', function () { send(input.value); });
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey && !isComposing) {
      e.preventDefault();
      send(input.value);
    }
  });
  var isComposing = false;
  input.addEventListener('compositionstart', function () { isComposing = true; });
  input.addEventListener('compositionend', function () { isComposing = false; });

  function autoGrow() {
    input.style.height = 'auto';
    input.style.height = Math.min(input.scrollHeight, 120) + 'px';
  }
  input.addEventListener('input', autoGrow);

  chatEl.addEventListener('click', function (e) {
    var chip = e.target.closest('.chip');
    if (chip && chip.dataset.q) send(chip.dataset.q);
  });

  // 抽屉
  var drawer = document.getElementById('drawer');
  var mask = document.getElementById('drawerMask');
  function openDrawer() { drawer.hidden = false; mask.hidden = false; renderProfile(); }
  function closeDrawer() { drawer.hidden = true; mask.hidden = true; }
  document.getElementById('profileBtn').addEventListener('click', openDrawer);
  document.getElementById('drawerClose').addEventListener('click', closeDrawer);
  mask.addEventListener('click', closeDrawer);

  document.getElementById('resetBtn').addEventListener('click', function () {
    if (!confirm('确定清空服务器上的学习记录吗？（不可恢复）')) return;
    api('/state', { method: 'POST', body: { action: 'reset' } })
      .then(function () {
        try { localStorage.removeItem('gw_cache'); } catch (e) {}
        profile = null;
        location.reload();
      })
      .catch(function (e) { alert('重置失败：' + e.message); });
  });

  // 启动
  profile = loadCache();
  if (profile) renderProfile();
  syncState();
})();
