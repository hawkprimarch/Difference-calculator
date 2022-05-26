#!/usr/bin/env node
import { Command } from '../node_modules/commander.js/esm.mjs';
import { getObjectFromPath, getDiff } from '../src/getDiff.js';

const program = new Command();
program
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-V, --version', 'output the version number', '0.0.1')
  .action((filepath1, filepath2) => {
    const obj1 = getObjectFromPath(filepath1);
    const obj2 = getObjectFromPath(filepath2);
    console.log(getDiff(obj1, obj2));
  })
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'output format');

program.parse();