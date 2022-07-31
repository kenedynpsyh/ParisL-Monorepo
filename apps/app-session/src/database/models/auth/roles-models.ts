import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '..';
import { BaseAtt } from './user-models';

interface RoleAtt extends BaseAtt {
  avatar?: string;
  background?: string;
  first_name?: string;
  last_name?: string;
  birthday?: Date;
  gender?: string;
  user_id?: string;
}

type RoleCreationAtt = Optional<RoleAtt, 'id'>;
export interface RoleInstance
  extends Model<RoleCreationAtt, RoleAtt>,
    RoleAtt {}
const roles_models = sequelize.define<RoleInstance>(
  'kaize_auth_roles',
  {
    public_id: {
      type: DataTypes.STRING,
    },
    avatar: {
      type: DataTypes.STRING,
    },
    background: {
      type: DataTypes.STRING,
    },
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    birthday: {
      type: DataTypes.DATE,
    },
    gender: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'kaize_auth_roles',
    schema: 'auth',
    timestamps: false,
  }
);

export default roles_models;
