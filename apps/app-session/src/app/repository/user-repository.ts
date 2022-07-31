import {
  admin_includes,
  user_exclude,
  user_includes,
} from '@serve/database/associate/user-associate';
import user_models, {
  UserInstance,
} from '@serve/database/models/auth/user-models';
import { Op } from 'sequelize/dist';
import { Service } from 'typedi';

@Service()
export class UserRepository {
  constructor() {}

  /**
   * findOne
   */
  public async findOneRepository(value: {
    [key: string]: any;
  }): Promise<UserInstance> {
    return await user_models.findOne({ where: value });
  }

  /**
   * findAll
   */
  public async findAllRepository(value: {
    [key: string]: any;
  }): Promise<UserInstance[]> {
    return await user_models.findAll({
      where: { email: { [Op.iLike]: `%${value.email}%` } },
      include: user_includes,
      attributes: { exclude: user_exclude },
    });
  }

  /**
   * findAllAdmin
   */
  public async findAllAdminRepository(value: {
    [key: string]: any;
  }): Promise<UserInstance[]> {
    return await user_models.findAll({
      where: { email: { [Op.iLike]: `%${value.email}%` } },
      include: admin_includes,
      attributes: { exclude: user_exclude },
    });
  }
}
