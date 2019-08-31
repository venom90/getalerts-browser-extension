/* eslint no-console: 0 */
import fs from 'fs-extra';
import chalk from 'chalk';
import webpack from 'webpack';

import config from '../config/webpack.prod.config';

const build = () => {
  fs.emptyDirSync(config.output.path);
  webpack(config).run((err) => {
    if (err) {
      console.error('Failed to compile.', [err]);
      process.exit(1);
    }
    console.log(chalk.green('Compiled successfully.'));
    console.log();
  });
};

build();
