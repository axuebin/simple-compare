'use strict';

/**
 * 比较两个版本号
 * @param {String} v1 现有版本
 * @param {String} v2 目标版本
 * @return {Number} 比较结果
 * 现有版本高于目标版本，返回1
 * 现有版本等于目标版本，返回0
 * 现有版本低于目标版本，返回-1
 */
var HIGH_VERSION = 1;
var LOW_VERSION = -1;
var SAME_VERSION = 0;

var cVersion = function cVersion(v1, v2) {
  var v1Arr = v1 ? v1.split('.') : [];
  var v2Arr = v2 ? v2.split('.') : [];
  var v1Str = v1Arr.map(function (item) {
    return item.padStart(4, 0);
  }).join('');
  var v2Str = v2Arr.map(function (item) {
    return item.padStart(4, 0);
  }).join('');
  return v1Str === v2Str ? SAME_VERSION : v1Str > v2Str ? HIGH_VERSION : LOW_VERSION;
};

var index = {
  cVersion
};

module.exports = index;
