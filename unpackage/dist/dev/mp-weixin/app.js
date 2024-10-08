"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index.js";
  "./pages/information/index.js";
  "./pages/mine/index.js";
  "./pages/login.js";
  "./pages/mine/avatar/index.js";
  "./pages/mine/info/index.js";
  "./pages/mine/info/edit.js";
  "./pages/mine/pwd/index.js";
  "./pages/mine/setting/index.js";
  "./pages/mine/help/index.js";
  "./pages/mine/about/index.js";
  "./pages/common/webview/index.js";
  "./pages/common/textview/index.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/chaochen/Desktop/manyou/haohaomanyoufront/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(common_vendor.uviewPlus);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
