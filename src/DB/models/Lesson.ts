import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from 'sequelize';
import { Student } from "./Student";

export class Lesson extends Model
{
    student:Student;
    Subject: number;
    Id:number;
    Day:number;
    GroupPay: number;
    GroupFee: number;
    SingleFee: number;
    SinglePay: number;
    static initModel(sequelize: Sequelize.Sequelize): typeof Lesson 
    {
        return Lesson.init(
            {
                Id: {
                    autoIncrement: true,
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true
                  },
                  Subject: {
                    autoIncrement: false,
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: false
                  },
                  Day: {
                    autoIncrement: false,
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: false
                  },
                  GroupFee: {
                    autoIncrement: false,
                    type: DataTypes.DECIMAL,
                    allowNull: false,
                    primaryKey: false
                  },
                  GroupPay: {
                    autoIncrement: false,
                    type: DataTypes.DECIMAL,
                    allowNull: false,
                    primaryKey: false
                  },
                  SingleFee: {
                    autoIncrement: false,
                    type: DataTypes.DECIMAL,
                    allowNull: false,
                    primaryKey: false
                  },
                  SinglePay: {
                    autoIncrement: false,
                    type: DataTypes.DECIMAL,
                    allowNull: false,
                    primaryKey: false
                  }
            },
            {
                sequelize,
                tableName: 'Lesson',
                schema: 'dbo',
                timestamps: false,
                indexes: []
              });
    }
}