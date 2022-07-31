import user_models, {
  UserInstance,
} from '@serve/database/models/auth/user-models';
import { Service } from 'typedi';

@Service()
export class UserRepository {
  constructor() {}

  /**
   * findOne
   */
  public async findOne(value: { [key: string]: any }): Promise<UserInstance> {
    return user_models.findOne({ where: value });
  }

  /**
   * findAll
   */
  public async findAll(value: { [key: string]: any }): Promise<UserInstance[]> {
    return user_models.findAll({ where: value });
  }
}
