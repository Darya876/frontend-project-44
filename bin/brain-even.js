#!/usr/bin/env node

import evenOrNot from '../src/games/cli-even.js';

console.log(evenOrNot(Number(process.argv[process.argv.length - 1])));
