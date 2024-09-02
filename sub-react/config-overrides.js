const { name } = require("./package.json");

module.exports = {
  webpack: (config) => {
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = "umd"; // umd 模块，方便 qiankun 读取声明周期
    config.output.chunkLoadingGlobal = `webpackJson_${name}`;
    return config;
  },
};
