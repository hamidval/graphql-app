import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from 'sequelize';
import { Parent } from "./Parent";
import { Lesson } from "./Lesson";
import { TakenLesson } from "./TakenLesson";

export class Student extends Model
{
    parent:Parent;
    Lessons:Lesson[];
    TakenLessons: TakenLesson[];
    Id: number;
    FirstName: String;
    LastName: String;
    static initModel(sequelize: Sequelize.Sequelize): typeof Student 
    {
        
        return Student.init(
            {
                Id: {
                    autoIncrement: true,
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true
                },
                FirstName: {
                    autoIncrement: false,
                    type: DataTypes.TEXT,
                    allowNull: false,
                    primaryKey: true
                },
                LastName: {
                    autoIncrement: false,
                    type: DataTypes.TEXT,
                    allowNull: false,
                    primaryKey: true
                }
            },
            {
                sequelize,
                tableName: 'Student',
                schema: 'dbo',
                timestamps: false,
                indexes: []
              });
    }
}