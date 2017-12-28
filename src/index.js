import fs from 'fs';
import path from 'path';
import async from 'async';
import hash from 'object-hash';

class IgnoreUnchangedFilesPlugin {
  apply(compiler) {
    compiler.plugin('emit', (compilation, callback) => {
      const {
        assets,
      } = compilation;
      async.forEach(Object.keys(assets), (file, cb) => {
        const asset = assets[file];
        let content = asset.source();

        if (!Buffer.isBuffer(content)) {
          content = new Buffer(content, 'utf8');
        }
        fs.readFile(path.join(compilation.outputOptions.path, file), (err, data) => {
          if (err) {
            cb();
            return;
          }
          try {
            if (hash(data) === hash(content)) {
              delete assets[file];
            }
          } catch (e) {
            console.error(e);
          }
          cb();
        });
      }, callback);
    });
  }
}

export default IgnoreUnchangedFilesPlugin;
