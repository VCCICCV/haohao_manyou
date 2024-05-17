"use strict";
const common_vendor = require("../../../common/vendor.js");
const config = require("../../../config.js");
if (!Array) {
  const _easycom_uni_title2 = common_vendor.resolveComponent("uni-title");
  const _easycom_uni_link2 = common_vendor.resolveComponent("uni-link");
  (_easycom_uni_title2 + _easycom_uni_link2)();
}
const _easycom_uni_title = () => "../../../uni_modules/uni-title/components/uni-title/uni-title.js";
const _easycom_uni_link = () => "../../../uni_modules/uni-link/components/uni-link/uni-link.js";
if (!Math) {
  (_easycom_uni_title + _easycom_uni_link)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const url = config.config.appInfo.site_url;
    const version = config.config.appInfo.version;
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "h2",
          title: "若依移动端"
        }),
        b: common_vendor.t(common_vendor.unref(version)),
        c: common_vendor.p({
          href: common_vendor.unref(url),
          text: common_vendor.unref(url),
          showUnderLine: "false"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/chaochen/Desktop/manyou/haohaomanyoufront/pages/mine/about/index.vue"]]);
wx.createPage(MiniProgramPage);
