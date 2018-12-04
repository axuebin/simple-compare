'use strict';

var cVersion = function cVersion(v1, v2) {
  var v1Arr = v1 ? v1.split('.') : [];
  var v2Arr = v2 ? v2.split('.') : [];
  var v1Str = v1Arr.map(function (item) {
    return item.padStart(4, 0);
  }).join('');
  var v2Str = v2Arr.map(function (item) {
    return item.padStart(4, 0);
  }).join('');
  return v1Str === v2Str ? 0 : v1Str > v2Str ? 1 : -1;
};

var index = {
  cVersion: cVersion
};

module.exports = index;
