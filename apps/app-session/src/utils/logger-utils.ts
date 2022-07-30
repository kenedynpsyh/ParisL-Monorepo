import winston from 'winston';

export const logger: winston.Logger = winston.createLogger({
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.simple()
  ),
});

export const loggerJSON: winston.Logger = winston.createLogger({
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  ),
});
