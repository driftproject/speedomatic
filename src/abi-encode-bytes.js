"use strict";

var rawEncode = require("vaporyjs-abi").rawEncode;
var removeTrailingZeros = require("./remove-trailing-zeros");

// convert bytes to ABI format
function abiEncodeBytes(bytesToEncode, isPadded) {
  var abiEncodedBytes = rawEncode(["bytes"], [bytesToEncode]).toString("hex");
  if (isPadded) return abiEncodedBytes;
  return removeTrailingZeros(abiEncodedBytes).slice(128);
}

module.exports = abiEncodeBytes;
