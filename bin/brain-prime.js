#!/usr/bin/env node

import primeOrNot from '../src/games/cli-prime.js';

console.log(primeOrNot(Number(process.argv[process.argv.length - 1])));
