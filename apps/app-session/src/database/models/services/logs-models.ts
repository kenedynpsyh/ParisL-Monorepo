import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '..';
import { BaseAtt } from '../auth/user-models';

interface LogAtt extends BaseAtt {
  loginAt?: string;
  logoutAt?: string;
  user_id?: string;
}

type LogCreationAtt = Optional<LogAtt, 'id'>;
export interface LogInstance extends Model<LogCreationAtt, LogAtt>, LogAtt {}
const user_logs_models = sequelize.define<LogInstance>(
  'kaize_service_user_logs',
  {
    public_id: {
      type: DataTypes.STRING,
    },
    loginAt: {
      type: DataTypes.STRING,
    },
    logoutAt: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'kaize_service_user_logs',
    schema: 'service',
    timestamps: false,
  }
);

export default user_logs_models;
