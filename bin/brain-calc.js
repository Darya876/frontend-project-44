#!/usr/bin/env node

import sumOfNums from '../src/games/cli-calc.js';

console.log(sumOfNums(Number(process.argv[process.argv.length - 1])));
