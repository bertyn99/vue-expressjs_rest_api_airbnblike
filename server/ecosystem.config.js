module.exports = {
  apps : [{
    script: 'server/index.js',
    watch: '.',
    env_production: {
      "NODE_ENV": "producion",
      "DB_USER": "root",
      "DB_PASSWORD": "persival99",
      "TOKEN_SECRET":  "azuouscoughsbqcgbuehbeiussbffg"
    }
  }],

  deploy : {
    production : {
      user : 'bertyn',
      host : ['51.91.8.181'],
      ref  : 'origin/master',
      repo : 'git@github.com:bertyn99/vue-expressjs_rest_api_airbnblike.git',
      path : '/home/bertyn/project/serveur_api',
      'pre-deploy-local': '',
      'post-deploy' : 'cd server | npm i && pm2 reload ecosystem.config.js --env production',
      "env"  : {
        "NODE_ENV": "production"
      },
      'pre-setup': ''
    }
  }
};
