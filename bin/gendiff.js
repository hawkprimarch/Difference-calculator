#!/usr/bin/env node
import { Command } from 'commander/esm.mjs';
import getGeneralLogic from '../src/index.js';

const program = new Command();
program
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-V, --version', 'output the version number', '0.0.1')
  .action((filepath1, filepath2) => {
    getGeneralLogic(filepath1, filepath2);
  })
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'output format');

program.parse();
