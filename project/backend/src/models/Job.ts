import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database.js';

interface JobAttributes {
  id: string;
  title: string;
  description: string;
  company: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  salary?: string;
  requirements: string[];
  employerId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Job extends Model<JobAttributes> implements JobAttributes {
  public id!: string;
  public title!: string;
  public description!: string;
  public company!: string;
  public location!: string;
  public type!: 'full-time' | 'part-time' | 'contract' | 'internship';
  public salary?: string;
  public requirements!: string[];
  public employerId!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Job.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM('full-time', 'part-time', 'contract', 'internship'),
      allowNull: false,
    },
    salary: {
      type: DataTypes.STRING,
    },
    requirements: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: [],
    },
    employerId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'Job',
  }
);