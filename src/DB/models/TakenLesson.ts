import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from 'sequelize';
import { Student } from "./Student";

export class TakenLesson extends Model
{
    student:Student
    Id: number;
    Subject: number;
    LessonCode:number;
    Hours: number;
    LessonDate: Date;
    TotalPay: number;
    TotalFee: number;
    StudentId: number;
    static initModel(sequelize: Sequelize.Sequelize): typeof TakenLesson
    {        
        return TakenLesson.init(
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
                    primaryKey: true
                },
                LessonCode: {
                    autoIncrement: false,
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true
                },
                Hours: {
                    autoIncrement: false,
                    type: DataTypes.DECIMAL,
                    allowNull: false,
                    primaryKey: true
                },
                LessonDate: {
                    autoIncrement: false,
                    type: DataTypes.DATE,
                    allowNull: false,
                    primaryKey: true
                },
                TotalPay: {
                    autoIncrement: false,
                    type: DataTypes.DOUBLE,
                    allowNull: false,
                    primaryKey: true
                },
                TotalFee: {
                    autoIncrement: false,
                    type: DataTypes.DOUBLE,
                    allowNull: false,
                    primaryKey: true
                },
                StudentId: {
                    autoIncrement: false,
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true
                }
            },
            {
                sequelize,
                tableName: 'TakenLesson',
                schema: 'dbo',
                timestamps: false,
                indexes: []
              });
    }
}