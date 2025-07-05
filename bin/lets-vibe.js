#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import readline from 'readline';
import path from 'path';
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
  .option('--no-templates', 'Create v-docs directory without copying default templates')
  .option('--template-dir <path>', 'Use a custom directory for templates')
  .action(async (target, options) => {
    try {
      let projectArg = target;
      let placeholderName = null;

      if (target === '.' || target === './') {
        const defaultName = path.basename(process.cwd());
        if (!options.yes) {
          const answer = await askQuestion(chalk.cyan(`Project name [${defaultName}]: `));
          placeholderName = (answer && answer.trim()) || defaultName;
        } else {
          placeholderName = defaultName;
        }
      }

      await scaffold(projectArg, { ...options, skipTemplates: options.noTemplates, placeholderName });
      console.log(chalk.green('✔ Documentation scaffold complete!'));
    } catch (err) {
      console.error(chalk.red('Error:'), err.message);
      process.exit(1);
    }
  });

program.parse();

function askQuestion(query) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) => rl.question(query, (ans) => {
    rl.close();
    resolve(ans);
  }));
}
