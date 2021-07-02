const CryptoJS = require("crypto-js");

var md5_hash = CryptoJS.MD5("asdfasdfasdfasd1");
var sha512_hash = CryptoJS.SHA512("asdfasdfasdfasd1");

console.log(md5_hash.toString());
console.log(parseInt(md5_hash.toString(), 16));

//console.log(sha512_hash.toString());
