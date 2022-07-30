import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import volleyball from 'volleyball';
import { BaseRouting } from './app/base/base-routing';
import { env } from './utils/dotenv-utils';
import { logger, loggerJSON } from './utils/logger-utils';

class App extends BaseRouting {
  app: express.Express = express();
  constructor() {
    super();
    this.extensions();
    this.listen();
  }

  private extensions() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(morgan('common'));
    this.app.use(volleyball);
  }

  private listen() {
    if (env['dev']) {
      this.app
        .listen(env['port'], () => {
          logger.info(`application running on http://localhost:${env['port']}`);
        })
        .on('error', (err) => {
          loggerJSON.error(err);
        });
    } else this.app.listen();
  }
}

export const app = new App();
