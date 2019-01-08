import { isString, isNumber } from './utils/is';
/**
 * 比较两个版本号
 * @param {String} version 现有版本
 * @param {String} baseVersion 目标版本
 * @return {Number} 比较结果
 * 现有版本高于目标版本，返回1
 * 现有版本等于目标版本，返回0
 * 现有版本低于目标版本，返回-1
 */
const HIGH_VERSION = 1;
const LOW_VERSION = -1;
const SAME_VERSION = 0;

const cVersion = (version, baseVersion) => {
  if (typeof version !== typeof baseVersion) {
    throw new Error('Version and baseVersion must be the same type');
  }
  let versionStr = '';
  let baseVersionStr = '';
  if (isNumber(version)) {
    versionStr = version;
    baseVersionStr = baseVersion;
  }
  if (isString(version)) {
    const versionArr = version ? version.split('.') : [];
    const baseVersionArr = baseVersion ? baseVersion.split('.') : [];
    versionStr = versionArr.map(item => item.padStart(6, 0)).join('');
    baseVersionStr = baseVersionArr.map(item => item.padStart(6, 0)).join('');
  }
  return versionStr === baseVersionStr ? SAME_VERSION : (versionStr > baseVersionStr ? HIGH_VERSION : LOW_VERSION);
};

export default cVersion;