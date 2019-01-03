# simple-js-compare

> A simple JavaScript compare lib.

## Getting Started

### Installation

```
npm install simple-js-compare --save;
```

### API

#### cVersion

> Compare two versions;

```
import simpleJsCompare from 'simple-js-compare';

const cVersion = simpleJsCompare.cVersion;
cVersion('1.1.0', '1.0.0'); // 1
cVersion('1.1.0b', '1.1.0a'); // 1
cVersion('10.0.0', '9.25.0'); // 1
cVersion('10.0.0', '11.0.0'); // -1
cVersion('10.0.00a', '10.00.0a'); // 0
```