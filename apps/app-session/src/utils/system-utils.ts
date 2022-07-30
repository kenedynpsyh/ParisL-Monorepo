import fs from 'fs';
import { join } from 'path';

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

interface FieldProps {
  user?: any;
  token?: string;
}
const fields: FieldProps = {};

try {
  fields['user'] = JSON.parse(readpath('../../tests/user.txt'));
} catch (error) {}
try {
  fields['token'] = readpath('../../token.txt');
} catch (error) {}

export { fields };
