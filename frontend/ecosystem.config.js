module.exports = {
  apps: [
    {
      name: 'app',
      script: 'npm start',
      watch: false,
    },
    {
      name: 'cron',
      script: 'pull.sh',
      instances: 1,
      interpreter: '/bin/sh',
      cron_restart: "*/2 * * * *",
      watch: false,
      autorestart: false
    }
  ],
  log_file: 'dev/stdout',
  time: true
};
