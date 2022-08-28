import { Plugin } from 'vite'
const path = require('path');
const fs = require('fs');
const glob = require('glob');

interface configOptions {
  ignore: string[]
}

function deleteFileByGlob(reg: string) {
  glob(reg, {}, function (err: Error, files: string[]) {
    if (err) {
      return console.log('vite-plugin-static-manage:error', err);
    }

    files.map(file => fs.unlink(file, () => {}))
  })
}

module.exports =  function vitePluginStaticManage (config: configOptions): Plugin {
  return {
    name: 'vite-plugin-static-manage',
    renderStart (outputOptions: any) {
      const { ignore } = config;
      if (Array.isArray(ignore)) {
        const outDir = outputOptions.dir
        ignore.forEach(reg => deleteFileByGlob(path.resolve(outDir, reg)))
      }
    }
  }
}

