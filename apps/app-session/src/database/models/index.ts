import { Dialect, Sequelize } from 'sequelize';
import { logger } from '@serve/utils/logger-utils';
import { env } from '@serve/utils/dotenv-utils';

export const sequelize: Sequelize = new Sequelize(
  env['db_name'],
  env['db_user'],
  env['db_pass'],
  {
    host: env['db_host'],
    port: parseInt(env['db_port']),
    logging: env['dev']
      ? function (message: string) {
          logger.info(message);
        }
      : null,
    dialect: env['db_dialect'] as Dialect,
  }
);
