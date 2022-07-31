import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '..';
import { BaseAtt } from './user-models';

interface LocationAtt extends BaseAtt {
  country?: string;
  states?: string;
  city?: string;
  address?: string;
  postcode?: string;
  user_id?: string;
}

type LocationCreationAtt = Optional<LocationAtt, 'id'>;
export interface LocationInstance
  extends Model<LocationCreationAtt, LocationAtt>,
    LocationAtt {}
const location_models = sequelize.define<LocationInstance>(
  'kaize_auth_location',
  {
    public_id: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
    states: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    postcode: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'kaize_auth_location',
    schema: 'auth',
    timestamps: false,
  }
);

export default location_models;
