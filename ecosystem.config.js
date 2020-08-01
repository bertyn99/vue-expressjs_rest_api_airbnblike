module.exports = {
  apps : [{
    script: 'server/index.js',
    watch: '.',
    env: {
      "DB_USER": "root",
      "DB_PASSWORD": "persival99",
      "TOKEN_SECRET":  "azuouscoughsbqcgbuehbeiussbffg"
    }
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

  deploy : {
    production : {
      user : 'bertyn',
      host : '51.91.8.181',
      ref  : 'origin/master',
      repo : 'https://github.com/bertyn99/vue-expressjs_rest_api_airbnblike',
      path : '/home/bertyn/project/serveur_api',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
