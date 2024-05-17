"use strict";
const common_vendor = require("../common/vendor.js");
if (!Array) {
  const _easycom_up_image2 = common_vendor.resolveComponent("up-image");
  const _easycom_up_col2 = common_vendor.resolveComponent("up-col");
  const _easycom_up_row2 = common_vendor.resolveComponent("up-row");
  (_easycom_up_image2 + _easycom_up_col2 + _easycom_up_row2)();
}
const _easycom_up_image = () => "../node-modules/uview-plus/components/u-image/u-image.js";
const _easycom_up_col = () => "../node-modules/uview-plus/components/u-col/u-col.js";
const _easycom_up_row = () => "../node-modules/uview-plus/components/u-row/u-row.js";
if (!Math) {
  (_easycom_up_image + _easycom_up_col + _easycom_up_row)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const image_list = [
      {
        url: "https://p.sda1.dev/17/402db6b8b5e62c86e39b1655a42933e7/setting1.png",
        title: "setting",
        mode: "aspectFit"
      },
      {
        url: "https://p.sda1.dev/17/51d387dfd8890a388c22017f6c8f7414/score1.png",
        title: "score",
        mode: "aspectFit"
      },
      {
        url: "https://p.sda1.dev/17/b672c1f510c6e4d868d50deeb3f8b05b/card1.png",
        title: "card",
        mode: "aspectFit"
      },
      {
        url: "/static/images/home/homeback.jpg",
        title: "homeback",
        mode: "scaleToFill"
      },
      {
        url: "https://p.sda1.dev/17/6c811101abc4f6134dffe0941bf7e2f6/gu1.png",
        title: "gu",
        mode: "aspectFit"
      },
      {
        url: "https://p.sda1.dev/17/af28ba843f5a9395420798aafb7098f4/shi1.png",
        title: "shi",
        mode: "aspectFit"
      },
      {
        url: "https://p.sda1.dev/17/20613b2cae0b3ddb93f99c5f2a105c9c/red1.png",
        title: "red",
        mode: "aspectFit"
      },
      {
        url: "https://p.sda1.dev/17/88d39f20e02d3004daec305bd4b81f58/ip.png",
        title: "ip",
        mode: "aspectFit"
      }
    ];
    function handleImageClick(index) {
      console.log("Image clicked at index:", index);
      switch (index) {
        case 0:
          console.log("setting", index);
          break;
        case 1:
          console.log("score", index);
          break;
        default:
          console.log("card", index);
      }
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(image_list.slice(0, 3), (item, index, i0) => {
          return {
            a: common_vendor.o(($event) => handleImageClick(index)),
            b: "02281a80-2-" + i0 + "," + ("02281a80-1-" + i0),
            c: common_vendor.p({
              ["show-loading"]: true,
              src: item.url,
              mode: item.mode,
              width: "210rpx",
              height: "80rpx"
            }),
            d: "02281a80-1-" + i0 + ",02281a80-0"
          };
        }),
        b: common_vendor.p({
          span: "3"
        }),
        c: common_vendor.p({
          justify: "space-between",
          gutter: "10"
        }),
        d: common_vendor.f(image_list.slice(4, 7), (item, index, i0) => {
          return {
            a: common_vendor.o(($event) => handleImageClick(index)),
            b: "02281a80-5-" + i0 + "," + ("02281a80-4-" + i0),
            c: common_vendor.p({
              ["show-loading"]: true,
              src: item.url,
              mode: item.mode
            }),
            d: "02281a80-4-" + i0 + "," + ("02281a80-3-" + i0),
            e: "02281a80-3-" + i0
          };
        }),
        e: common_vendor.p({
          span: "3"
        }),
        f: common_vendor.p({
          justify: "space-between",
          gutter: "10"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-02281a80"], ["__file", "C:/Users/chaochen/Desktop/manyou/haohaomanyoufront/pages/index.vue"]]);
wx.createPage(MiniProgramPage);
