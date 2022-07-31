import { Service } from 'typedi';
import jsonwebtoken from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import _ from 'lodash';
import {
  loginfields,
  passwordfields,
  registerfields,
  resetfields,
} from '../fields/user-fields';
import { UserRepository } from '../repository/user-repository';
import {
  createpath,
  errors,
  public_id,
  status,
  ticket,
} from '@serve/utils/system-utils';
import {
  roles_models,
  user_models,
} from '@serve/database/associate/user-associate';
import { Op } from 'sequelize';
import { env } from '@serve/utils/dotenv-utils';

@Service()
export class UserService {
  private password = (data: string): string => bcrypt.hashSync(data, 10);
  private confirmation = (old: string, data: string): boolean =>
    bcrypt.compareSync(old, data);
  private match = (old: string, data: string): boolean => old === data;
  private message: string = 'profile has been updated';

  constructor(private readonly repository: UserRepository) {}

  /**
   * created
   */
  public async createdService(body: registerfields) {
    const find = await this.repository.findOne(_.pick(body, ['email']));
    if (find) {
      return errors(
        status.BAD_REQUEST,
        'Email address already exists, please choose another one'
      );
    }
    if (!this.match(body.password, body.confirmation)) {
      return errors(
        status.BAD_REQUEST,
        "Password don't match, please check again"
      );
    }
    body.password = this.password(body.password);
    const create = await user_models.create({
      public_id: public_id(),
      ..._.pick(body, ['email', 'password']),
    });
    await roles_models.create({
      public_id: public_id(),
      user_id: create.public_id,
    });
    if (env['test']) {
      createpath('../../tests/user.txt', JSON.stringify(create));
    }
    return { status: status.CREATED, message: 'Accounts has been created' };
  }

  /**
   * loginService
   */
  public async loginService(body: loginfields) {
    const find = await this.repository.findOne({ email: body.token });
    if (!find) {
      return errors(status.BAD_REQUEST, 'Inccorect username or password');
    }
    if (!this.confirmation(body.password, find.password)) {
      return errors(status.BAD_REQUEST, 'Inccorect username or password');
    }
    const reset = await this.repository.findOne({ email: body.token });
    reset.api_token = null;
    reset.token = null;
    reset.save();
    find.api_token = jsonwebtoken.sign({ user: reset }, ticket(), {
      algorithm: 'RS256',
    });
    find.save();
    if (env['test']) {
      createpath('../../tests/token.txt', find.api_token);
    }
    return { status: status.OK, token: find.api_token };
  }

  /**
   * passwordService
   */
  public async passwordService(body: passwordfields, public_id: string) {
    const find = await this.repository.findOne({ public_id });
    if (!find) {
      return errors(status.INTERNAL_SERVER_ERROR, 'false');
    }
    if (!this.match(body.password, body.confirmation)) {
      return errors(
        status.BAD_REQUEST,
        "Password don't match, please check again"
      );
    }
    if (!this.confirmation(body.old_password, find.password)) {
      return errors(status.BAD_REQUEST, 'Wrong password');
    }
    find.update({ password: this.password(body.password) });
    return { status: status.OK, message: 'Password has been updated' };
  }

  /**
   * resetService
   */
  public async resetService(body: resetfields) {
    const find = await this.repository.findOne(body);
    if (!find) {
      return errors(status.BAD_REQUEST, 'Accounts not found');
    }
    if (env['dev']) {
    }
    return {
      status: status.OK,
      message: 'Password has been reset, please check your email account.',
    };
  }
}
