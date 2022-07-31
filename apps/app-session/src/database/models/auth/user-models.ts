import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '..';

export interface BaseAtt {
  id?: number;
  public_id?: string;
  createdAt?: Date;
  updateAt?: Date;
}

interface UserAtt extends BaseAtt {
  username?: string;
  email?: string;
  password?: string;
  token?: string;
  api_token?: string;
}

type UserCreationAtt = Optional<UserAtt, 'id'>;
export interface UserInstance
  extends Model<UserCreationAtt, UserAtt>,
    UserAtt {}
const user_models = sequelize.define<UserInstance>(
  'kaize_users',
  {
    public_id: {
      type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    token: {
      type: DataTypes.STRING,
    },
    api_token: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'kaize_users',
  }
);

export default user_models;
