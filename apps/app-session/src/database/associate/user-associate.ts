import user_models from '../models/auth/user-models';
import roles_models from '../models/auth/roles-models';
import location_models from '../models/auth/location-models';
import user_logs_models from '../models/services/logs-models';
import { HasManyOptions, HasOneOptions, Includeable } from 'sequelize';

const user_exclude = ['id', 'password', 'api_token', 'token'];

const user_includes: Includeable[] = [
  {
    model: roles_models,
    attributes: { exclude: ['user_id', 'id'] },
    as: 'author',
  },
  {
    model: location_models,
    attributes: { exclude: ['id', 'user_id'] },
    as: 'location',
  },
];

const admin_includes: Includeable[] = [
  {
    model: user_logs_models,
    attributes: { exclude: ['id', 'user_id'] },
    as: 'logs',
  },
];
admin_includes.push(...user_includes);

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

user_models.hasOne(location_models, {
  ...options,
  as: 'location',
});

user_models.hasMany(user_logs_models, {
  ...options,
  as: 'logs',
});

export {
  user_models,
  roles_models,
  user_includes,
  user_exclude,
  admin_includes,
};
