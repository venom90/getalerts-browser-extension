/* eslint no-console: 0 */
import fs from 'fs-extra';
import chalk from 'chalk';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

import config from '../config/webpack.dev.config';

let compiler;
let server;

function setupCompiler() {
  compiler = webpack(config);

  compiler.plugin('done', () => {
    console.log();
    console.log(
      chalk.green(
        `Build successfully, You can now install the ${chalk.bold('build-dev')}
         directory as a temporary extension.`
      )
    );
    console.log();
    console.log('For Chrome and Opera:');
    console.log('    * Visit chrome://extensions or opera://extensions');
    console.log('    * Enable Developer Mode');
    console.log('    * Click to load unpacked extension');
    console.log('    * Select the build-dev directory');
    console.log();
    console.log('For Firefox:');
    console.log('    * Visit about:debugging');
    console.log('    * Check Enable add-on debugging');
    console.log('    * Click to load Temporary Add-on');
    console.log('    * Select the build-dev/manifest.json file');
    console.log();
    console.log('For Edge:');
    console.log('    https://docs.microsoft.com/en-us/microsoft-edge/extensions/guides/adding-and-removing-extensions');
    console.log();
    console.log(
      'To create a production build, use ' +
        `${chalk.cyan('yarn run build')}.`
    );
    console.log();
  });
}

function setupServer(host, port) {
  server = new WebpackDevServer(compiler, {
    compress: true,
    hot: true,
    stats: {
      color: true
    }
  });

  fs.emptyDirSync(config.output.path);

  server.listen(port, host, (err) => { /* eslint consistent-return: 0 */
    if (err) {
      return console.log(err);
    }

    console.log(chalk.cyan('Starting the development server...'));
    console.log();
  });
}

function run(host, port) {
  setupCompiler();
  setupServer(host, port);
}


run(
  process.env.HOST || 'localhost',
  process.env.PORT || 3004
);
