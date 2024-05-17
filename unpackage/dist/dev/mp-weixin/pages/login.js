"use strict";
const common_vendor = require("../common/vendor.js");
const api_login = require("../api/login.js");
require("../store/modules/user.js");
const config = require("../config.js");
const store_index = require("../store/index.js");
require("../utils/request.js");
require("../utils/auth.js");
require("../utils/errorCode.js");
require("../utils/common.js");
require("../utils/storage.js");
require("../utils/constant.js");
require("../store/getters.js");
const _sfc_main = {
  __name: "login",
  setup(__props) {
    const codeUrl = common_vendor.ref("");
    const captchaEnabled = common_vendor.ref(true);
    const globalConfig = common_vendor.ref(config.config);
    const loginForm = common_vendor.ref({
      username: "admin",
      password: "admin123",
      code: "",
      uuid: ""
    });
    function getCode() {
      api_login.getCodeImg().then((res) => {
        captchaEnabled.value = res.captchaEnabled === void 0 ? true : res.captchaEnabled;
        if (captchaEnabled.value) {
          codeUrl.value = "data:image/gif;base64," + res.img;
          loginForm.value.uuid = res.uuid;
        }
      });
    }
    async function handleLogin() {
      if (loginForm.value.username === "") {
        common_vendor.index.showToast({
          title: "请输入您的账号",
          mask: false,
          duration: 1e3
        });
      } else if (loginForm.value.password === "") {
        common_vendor.index.showToast({
          title: "请输入您的密码",
          mask: false,
          duration: 1e3
        });
      } else if (loginForm.value.code === "" && captchaEnabled.value) {
        common_vendor.index.showToast({
          title: "请输入验证码",
          mask: false,
          duration: 1e3
        });
      } else {
        common_vendor.index.showToast({
          title: "登录中，请耐心等待...",
          mask: false,
          duration: 1e3
        });
        pwdLogin();
      }
    }
    async function pwdLogin() {
      store_index.store.dispatch("Login", loginForm.value).then(() => {
        loginSuccess();
      }).catch(() => {
        if (captchaEnabled.value) {
          getCode();
        }
      });
    }
    function loginSuccess(result) {
      store_index.store.dispatch("GetInfo").then((res) => {
        common_vendor.index.switchTab({
          url: "/pages/index"
        });
      });
    }
    getCode();
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: globalConfig.value.appInfo.logo,
        b: loginForm.value.username,
        c: common_vendor.o(($event) => loginForm.value.username = $event.detail.value),
        d: loginForm.value.password,
        e: common_vendor.o(($event) => loginForm.value.password = $event.detail.value),
        f: captchaEnabled.value
      }, captchaEnabled.value ? {
        g: loginForm.value.code,
        h: common_vendor.o(($event) => loginForm.value.code = $event.detail.value),
        i: codeUrl.value,
        j: common_vendor.o(getCode)
      } : {}, {
        k: common_vendor.o(handleLogin),
        l: common_vendor.o((...args) => _ctx.handleUserAgrement && _ctx.handleUserAgrement(...args)),
        m: common_vendor.o((...args) => _ctx.handlePrivacy && _ctx.handlePrivacy(...args))
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/chaochen/Desktop/manyou/haohaomanyoufront/pages/login.vue"]]);
wx.createPage(MiniProgramPage);
