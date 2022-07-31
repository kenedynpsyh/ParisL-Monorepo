import fs from 'fs';
import { join } from 'path';
import httpStatus from 'http-status';
import createError from 'http-errors';
import { nanoid } from 'nanoid';
import { UserInstance } from '@serve/database/models/auth/user-models';

export const status = httpStatus;
export const errors = createError;
export const public_id = nanoid;

export const createpath = (path: string, data: string) => {
  fs.writeFileSync(joinpath(path), data);
};

export const readpath = (path: string): string => {
  return fs.readFileSync(joinpath(path), { encoding: 'utf-8' });
};

export const joinpath = (path: string): string => {
  return join(__dirname, path);
};

export const removepath = (path: string) => {
  fs.unlinkSync(joinpath(path));
};

export const ticket = (): string => {
  return readpath('./jwtRS256.key');
};

interface FieldProps {
  user?: UserInstance;
  token?: string;
}
const fields: FieldProps = {};

try {
  fields['user'] = JSON.parse(readpath('../../tests/user.txt'));
} catch (error) {}
try {
  fields['token'] = readpath('../../tests/token.txt');
} catch (error) {}

export { fields };
