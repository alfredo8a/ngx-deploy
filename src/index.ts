const Rsync = require('./rsync');
const fs = require('fs');
const argv = require('minimist')(process.argv.slice(2));
const chalk = require('chalk');
const log = console.log;
const info = chalk.green;
const error = chalk.bold.red;
const warning = chalk.keyword('orange');
const pathConfig = 'src/environments/deploy.json';

const validConfig = (config): boolean => {  
  if (config.source !== '' && config.dest !== '' && config.host !== '' && config.user !== '' && config.path !== '')
    return true;

  return false;
}
function run() {
  let env: string = argv.c;
  if (!argv.c || typeof argv.c === 'boolean') {
    log(info('Deploying DEV ...'));
    env = 'dev';
  } else {
    log(info(`Deploying ${env.toUpperCase()} ...`));
  }

  log(info('Reading config file ...'));

  if (!fs.existsSync(pathConfig)) {
    log(warning("Config file dont exist. Create with 'ng add ngx-delploy'"))
    process.exit(0);
  }
  log(info(`Reading ${env.toUpperCase()} config ...`));
  const config = JSON.parse(fs.readFileSync(pathConfig))[env];
  if (!validConfig(config)) {
    log(error(`Config is not complete for ${env.toUpperCase()} environment or dont exist, check file 'src/environments/deploy.json'`))
    process.exit(0);
  }
  const rsync = new Rsync()
    .shell('ssh')
    .flags('avzhr')
    .delete()
    .source(`${config.source}/*`)
    .destination(`${config.user}@${config.host}:${config.path}`);

  rsync.execute(function (error, code, _cmd) {
    if (error) {
      log(error(code, error))
    } else {
      log(info("Project deployed !"))
    }
  });
}

run();
