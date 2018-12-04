/**
 * 比较两个版本号
 * @param {String} v1 现有版本
 * @param {String} v2 目标版本
 * @return {Number} 比较结果
 * 现有版本高于目标版本，返回1
 * 现有版本等于目标版本，返回0
 * 现有版本低于目标版本，返回-1
 */
const HIGH_VERSION = 1;
const LOW_VERSION = -1;
const SAME_VERSION = 0;

const cVersion = (v1, v2) => {
  const v1Arr = v1 ? v1.split('.') : [];
  const v2Arr = v2 ? v2.split('.') : [];
  const v1Str = v1Arr.map(item => item.padStart(4, 0)).join('');
  const v2Str = v2Arr.map(item => item.padStart(4, 0)).join('');
  return v1Str === v2Str ? SAME_VERSION : (v1Str > v2Str ? HIGH_VERSION : LOW_VERSION);
};

export default cVersion;