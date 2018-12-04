const cVersion = (v1, v2) => {
  const v1Arr = v1 ? v1.split('.') : [];
  const v2Arr = v2 ? v2.split('.') : [];
  const v1Str = v1Arr.map(item => item.padStart(4, 0)).join('');
  const v2Str = v2Arr.map(item => item.padStart(4, 0)).join('');
  return v1Str === v2Str ? 0 : (v1Str > v2Str ? 1 : -1);
};

export default cVersion;