'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1544858518449_7032';

  // add your config here
  config.middleware = [];
  config.view = {
    defaultViewEngine: 'nunjucks',
  };
  config.redis = {
    client: {
      port: 6379,      // Redis port
      host: 'redis',   // Redis host
      password: 'auth',
      db: 0,
    },
  };
  return config;
};
