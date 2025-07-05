#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';

const program = new Command();

program
  .name('lets-vibe')
  .description('Scaffold professional documentation for a new project')
  .version('0.1.0')
  .argument('<project-name>', 'Name of the project folder to create')
  .option('--overwrite', 'Overwrite existing lets-vibe generated files')
  .option('--dry-run', 'Show the file operations without writing to disk')
  .option('--yes', 'Skip interactive prompts and assume yes')
  .option('--cursor', 'Generate a default .cursor.json config file')
  .option('--template-dir <path>', 'Use a custom directory for templates')
  .action(async (projectName, options) => {
    console.log(chalk.green(`\n[lets-vibe] Scaffolding documentation for: ${projectName}`));
    console.log(chalk.yellow('This is a placeholder implementation.'));
    console.log(chalk.yellow('Run `lets-vibe` after implementation is completed.\n'));
  });

program.parse();
