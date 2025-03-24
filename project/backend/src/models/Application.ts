import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database.js';

interface ApplicationAttributes {
  id: string;
  jobId: string;
  userId: string;
  status: 'pending' | 'reviewed' | 'accepted' | 'rejected';
  resume: string; // URL to resume
  coverLetter?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Application extends Model<ApplicationAttributes> implements ApplicationAttributes {
  public id!: string;
  public jobId!: string;
  public userId!: string;
  public status!: 'pending' | 'reviewed' | 'accepted' | 'rejected';
  public resume!: string;
  public coverLetter?: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Application.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    jobId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Jobs',
        key: 'id',
      },
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    status: {
      type: DataTypes.ENUM('pending', 'reviewed', 'accepted', 'rejected'),
      allowNull: false,
      defaultValue: 'pending',
    },
    resume: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    coverLetter: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    modelName: 'Application',
  }
);