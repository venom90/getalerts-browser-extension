import fs from 'fs';
import path from 'path';

const rootDir = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(rootDir, relativePath);

export default {
  source: resolveApp('src'),
  devBuild: resolveApp('build-dev'),
  prodBuild: resolveApp('build-prod'),
  popupSrc: resolveApp('src/popup'),
  popupHtml: resolveApp('src/popup/index.html'),
  contentSrc: resolveApp('src/content'),
  backgroundSrc: resolveApp('src/background'),
  extension: resolveApp('extension')
};
