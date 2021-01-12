"use strict";

var vaporyjsAbi = require("vaporyjs-abi");

// ABI-encode the 'data' field in a transaction payload
function abiEncodeData(payload, format) {
  var abiEncodedData = vaporyjsAbi.rawEncode(payload.signature || [], payload.params);
  if (format === "hex") return "0x" + abiEncodedData.toString("hex");
  return abiEncodedData;
}

module.exports = abiEncodeData;
