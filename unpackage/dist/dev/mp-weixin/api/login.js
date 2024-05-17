"use strict";
const utils_request = require("../utils/request.js");
function login(username, password, code, uuid) {
  return utils_request.request({
    url: "/auth/login",
    headers: {
      isToken: false
    },
    method: "post",
    data: { username, password, code, uuid }
  });
}
function getInfo() {
  return utils_request.request({
    url: "/system/user/getInfo",
    method: "get"
  });
}
function logout() {
  return utils_request.request({
    url: "/auth/logout",
    method: "delete"
  });
}
function getCodeImg() {
  return utils_request.request({
    url: "/code",
    headers: {
      isToken: false
    },
    method: "get",
    timeout: 2e4
  });
}
exports.getCodeImg = getCodeImg;
exports.getInfo = getInfo;
exports.login = login;
exports.logout = logout;
