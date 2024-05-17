"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_swiper_dot2 = common_vendor.resolveComponent("uni-swiper-dot");
  _easycom_uni_swiper_dot2();
}
const _easycom_uni_swiper_dot = () => "../../uni_modules/uni-swiper-dot/components/uni-swiper-dot/uni-swiper-dot.js";
if (!Math) {
  _easycom_uni_swiper_dot();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const current = common_vendor.ref(0);
    const swiperDotIndex = common_vendor.ref(0);
    const data = common_vendor.ref([
      {
        image: "https://s21.ax1x.com/2024/05/17/pknOjYQ.jpg"
      },
      {
        image: "https://s21.ax1x.com/2024/05/17/pknOvWj.md.jpg"
      },
      {
        image: "https://s21.ax1x.com/2024/05/17/pknOzSs.md.jpg"
      },
      {
        image: "https://s21.ax1x.com/2024/05/17/pknXpyq.jpg"
      },
      {
        image: "https://s21.ax1x.com/2024/05/17/pknXSln.jpg"
      },
      {
        image: "https://s21.ax1x.com/2024/05/17/pknX9O0.jpg"
      }
    ]);
    function clickBannerItem(item) {
      console.info(item);
    }
    function changeSwiper(e) {
      current.value = e.detail.current;
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(data.value, (item, index, i0) => {
          return {
            a: item.image,
            b: common_vendor.o(($event) => clickBannerItem(item), index),
            c: index
          };
        }),
        b: swiperDotIndex.value,
        c: common_vendor.o(changeSwiper),
        d: common_vendor.p({
          info: data.value,
          current: current.value,
          field: "content"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/chaochen/Desktop/manyou/haohaomanyoufront/pages/information/index.vue"]]);
wx.createPage(MiniProgramPage);
