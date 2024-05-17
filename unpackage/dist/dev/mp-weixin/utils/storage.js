"use strict";
const common_vendor = require("../common/vendor.js");
const utils_constant = require("./constant.js");
let storageKey = "storage_data";
let storageNodeKeys = [utils_constant.constant.avatar, utils_constant.constant.name, utils_constant.constant.roles, utils_constant.constant.permissions];
let storageData = common_vendor.index.getStorageSync(storageKey) || {};
const storage = {
  set: function(key, value) {
    if (storageNodeKeys.indexOf(key) != -1) {
      let tmp = common_vendor.index.getStorageSync(storageKey);
      tmp = tmp ? tmp : {};
      tmp[key] = value;
      common_vendor.index.setStorageSync(storageKey, tmp);
    }
  },
  get: function(key) {
    return storageData[key] || "";
  },
  remove: function(key) {
    delete storageData[key];
    common_vendor.index.setStorageSync(storageKey, storageData);
  },
  clean: function() {
    common_vendor.index.removeStorageSync(storageKey);
  }
};
exports.storage = storage;
