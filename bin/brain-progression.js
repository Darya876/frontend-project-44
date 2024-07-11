#!/usr/bin/env node

import progression from '../src/games/cli-progression.js';

console.log(progression(Number(process.argv[process.argv.length - 1])));
