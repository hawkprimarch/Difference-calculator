#!/usr/bin/env node
import { Command } from 'commander/esm.mjs';
import { getObjectFromPath, getDiff, printAnswer } from '../src/getDiff.js';

const program = new Command();
program
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-V, --version', 'output the version number', '0.0.1')
  .action((filepath1, filepath2) => {
    const obj1 = getObjectFromPath(filepath1);
    const obj2 = getObjectFromPath(filepath2);
    const massOfDiff = getDiff(obj1, obj2);
    printAnswer(massOfDiff);
  })
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'output format');

program.parse();
