import { DataTypes, Model } from 'sequelize'
import { db } from '../database/database'

export enum Role {
  'admin',
  'user',
}

export interface IUser {
  idUser: string
  name: string
  email: string
  password: string
  role: Role
  createdAt: Date
  updatedAt: Date | null
}

interface UserInstance extends Model<IUser, any>, IUser {}

const User = db.define<UserInstance>('user', {
  idUser: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
})

export default User
