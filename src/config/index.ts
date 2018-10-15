import { prodConfig } from './config.prod';
import { stagingConfig } from './config.staging';
import { devConfig } from './config.dev';

let config: any;

switch (process.env.ENV) {
  case 'production':
    config = prodConfig;
    break;
  case 'staging':
    config = stagingConfig;
    break;
  default:
    config = devConfig;
}

export default config;
