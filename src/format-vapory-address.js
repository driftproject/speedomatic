"use strict";

var prefixHex = require("./prefix-hex");
var strip0xPrefix = require("./strip-0x-prefix");

function formatVaporyAddress(addr) {
  if (addr == null) return addr;
  if (Array.isArray(addr)) {
    for (var i = 0, n = addr.length; i < n; ++i) {
      addr[i] = formatVaporyAddress(addr[i]);
    }
    return addr;
  }
  if (addr && addr.constructor === String) {
    addr = strip0xPrefix(addr);
    while (addr.length > 40 && addr.slice(0, 1) === "0") {
      addr = addr.slice(1);
    }
    while (addr.length < 40) {
      addr = "0" + addr;
    }
    return prefixHex(addr);
  }
}

module.exports = formatVaporyAddress;
