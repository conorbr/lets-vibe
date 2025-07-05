#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import { scaffold } from '../src/scaffold.js';

const program = new Command();

program
  .name('lets-vibe')
  .description('Scaffold professional documentation for a new project')
  .version('0.1.0')
  .argument('[target]', 'Directory to initialize (use . for current directory)', '.')
  .option('--overwrite', 'Overwrite existing lets-vibe generated files')
  .option('--dry-run', 'Show the file operations without writing to disk')
  .option('--yes', 'Skip interactive prompts and assume yes')
  .option('--cursor', 'Generate a default .cursor.json config file')
  .option('--template-dir <path>', 'Use a custom directory for templates')
  .action(async (projectName, options) => {
    try {
      await scaffold(projectName, options);
      console.log(chalk.green('✔ Documentation scaffold complete!'));
    } catch (err) {
      console.error(chalk.red('Error:'), err.message);
      process.exit(1);
    }
  });

program.parse();
