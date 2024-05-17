"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../utils/storage.js");
const store_index = require("../../store/index.js");
require("../../utils/constant.js");
require("../../store/modules/user.js");
require("../../config.js");
require("../../api/login.js");
require("../../utils/request.js");
require("../../utils/auth.js");
require("../../utils/errorCode.js");
require("../../utils/common.js");
require("../../store/getters.js");
if (!Array) {
  const _easycom_uni_popup_dialog2 = common_vendor.resolveComponent("uni-popup-dialog");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_popup_dialog2 + _easycom_uni_popup2)();
}
const _easycom_uni_popup_dialog = () => "../../uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_popup_dialog + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const name = store_index.store.state.user.name;
    const avatar = common_vendor.ref(store_index.store.state.user.avatar);
    const windowHeight = common_vendor.ref(common_vendor.index.getSystemInfoSync().windowHeight - 50);
    const popup = common_vendor.ref(null);
    common_vendor.index.$on("refresh", () => {
      avatar.value = store_index.store.state.user.avatar;
    });
    console.log(avatar.value);
    function handleToInfo() {
      common_vendor.index.navigateTo({
        url: "/pages/mine/info/index"
      });
    }
    function handleToEditInfo() {
      common_vendor.index.navigateTo({
        url: "/pages/mine/info/edit"
      });
    }
    function handleToSetting() {
      common_vendor.index.navigateTo({
        url: "/pages/mine/setting/index"
      });
    }
    function handleToLogin() {
      common_vendor.index.reLaunch({
        url: "/pages/login"
      });
    }
    function handleToAvatar() {
      common_vendor.index.navigateTo({
        url: "/pages/mine/avatar/index"
      });
    }
    function dialogConfirm() {
      store_index.store.dispatch("LogOut").then(() => {
        common_vendor.index.reLaunch({
          url: "/pages/login"
        });
      });
    }
    function dialogClose() {
    }
    function handleHelp() {
      common_vendor.index.navigateTo({
        url: "/pages/mine/help/index"
      });
    }
    function handleAbout() {
      common_vendor.index.navigateTo({
        url: "/pages/mine/about/index"
      });
    }
    function handleJiaoLiuQun() {
      common_vendor.index.showToast({
        title: "QQ群：xxxxxxx",
        mask: false,
        icon: "none",
        duration: 1e3
      });
    }
    function handleBuilding() {
      common_vendor.index.showToast({
        title: "模块建设中~",
        mask: false,
        icon: "none",
        duration: 1e3
      });
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !avatar.value
      }, !avatar.value ? {} : {}, {
        b: avatar.value
      }, avatar.value ? {
        c: common_vendor.o(handleToAvatar),
        d: avatar.value
      } : {}, {
        e: !common_vendor.unref(name)
      }, !common_vendor.unref(name) ? {
        f: common_vendor.o(handleToLogin)
      } : {}, {
        g: common_vendor.unref(name)
      }, common_vendor.unref(name) ? {
        h: common_vendor.t(common_vendor.unref(name)),
        i: common_vendor.o(handleToInfo)
      } : {}, {
        j: common_vendor.o(handleToInfo),
        k: common_vendor.o(handleJiaoLiuQun),
        l: common_vendor.o(handleBuilding),
        m: common_vendor.o(handleBuilding),
        n: common_vendor.o(handleBuilding),
        o: common_vendor.o(handleToEditInfo),
        p: common_vendor.o(handleHelp),
        q: common_vendor.o(handleAbout),
        r: common_vendor.o(handleToSetting),
        s: `${windowHeight.value}px`,
        t: common_vendor.o(dialogConfirm),
        v: common_vendor.o(dialogClose),
        w: common_vendor.p({
          type: "info",
          cancelText: "关闭",
          confirmText: "退出",
          title: "通知",
          content: "确定注销并退出系统吗"
        }),
        x: common_vendor.sr(popup, "408d1f16-0", {
          "k": "popup"
        }),
        y: common_vendor.p({
          type: "dialog"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/chaochen/Desktop/manyou/haohaomanyoufront/pages/mine/index.vue"]]);
wx.createPage(MiniProgramPage);
