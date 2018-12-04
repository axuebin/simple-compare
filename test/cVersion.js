var cVersion = require('../dist/dist.js').cVersion;
var expect = require('chai').expect;

function random(m,n){
  var num = Math.floor(Math.random() * (m - n) + n);
  return num;  
}

describe('cVersion 函数测试', function () {
  // it('1.1.0 比 1.0.0 版本高', function () {
  //   expect(cVersion('1.1.0', '1.0.0')).to.be.equal(1);
  // });
  // it('1.1.0b 比 1.1.0a 版本高', function () {
  //   expect(cVersion('1.1.0b', '1.1.0a')).to.be.equal(1);
  // });
  // it('10.0.0 比 9.25.0 版本高', function () {
  //   expect(cVersion('10.0.0', '9.25.0')).to.be.equal(1);
  // });
  // it('10.0.0 比 11.0.0 版本低', function () {
  //   expect(cVersion('10.0.0', '11.0.0')).to.be.equal(-1);
  // });
  // it('10.0.00a 和 10.00.0a 版本一样', function () {
  //   expect(cVersion('10.0.00a', '10.00.0a')).to.be.equal(0);
  // });
  for (var i = 0; i < 10; i++) {
    (function () {
      var v1 = random(0, 100) + '.' + random(0, 100) + '.' + random(0, 100);
      var v2 = random(0, 100) + '.' + random(0, 100) + '.' + random(0, 100);
      it(v1 + ' 比 ' + v2 + ' 版本高', function () {
        expect(cVersion(v1, v2)).to.be.equal(1);
      });
    })(i);
  }
});