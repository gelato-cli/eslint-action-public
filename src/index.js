/* eslint-disable @typescript-eslint/no-var-requires, import/no-dynamic-require */
const path = require('path');

require('ts-node').register();

require(path.resolve(__dirname, './index.tsx'));
