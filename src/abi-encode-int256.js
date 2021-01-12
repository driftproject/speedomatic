"use strict";

var rawEncode = require("vaporyjs-abi").rawEncode;

function abiEncodeInt256(value) {
  return rawEncode(["int256"], [value]).toString("hex");
}

module.exports = abiEncodeInt256;
