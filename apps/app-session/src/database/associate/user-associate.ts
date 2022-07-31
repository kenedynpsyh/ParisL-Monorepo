import user_models from '../models/auth/user-models';
import roles_models from '../models/auth/roles-models';
import { HasManyOptions, HasOneOptions, Includeable } from 'sequelize';

const user_exclude = ['id', 'password', 'api_token', 'token'];

const user_includes: Includeable[] = [
  {
    model: roles_models,
    attributes: {
      exclude: ['user_id', 'id'],
    },
    as: 'author',
  },
];

const options: HasOneOptions | HasManyOptions = {
  sourceKey: 'public_id',
  foreignKey: {
    name: 'user_id',
    allowNull: true,
  },
};

user_models.hasOne(roles_models, {
  ...options,
  as: 'author',
});

export { user_models, roles_models, user_includes, user_exclude };
