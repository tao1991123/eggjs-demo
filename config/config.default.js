'use strict';
const uuidV5 = require("uuid/v5");
const uuidV4 = require("uuid/v4");

const id = uuidV5(uuidV4(), uuidV5.DNS);
module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1544858518449_7032';

  // add your config here
  config.middleware = [];
  config.view = {
    defaultViewEngine: 'nunjucks',
  };
  config.PC_ID = id;
  return config;
};
