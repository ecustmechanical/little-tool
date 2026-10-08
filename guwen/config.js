// 部署配置（不含任何密钥，可公开）
// apiBase：后端代理地址（只允许 https；由 sync_url.sh 自动同步）
window.GW_CONFIG = {
  // 部署时由脚本替换为真实站点地址；本地调试可改成 http://localhost:8888/api
  apiBase: "__API_BASE__"
};
