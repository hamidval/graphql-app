import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from 'sequelize';
import { Student } from "./Student";

export class Parent extends Model
{
    students:Student[]
    Id:number;
    FirstName: String;
    LastName: String;
    Email:String;
    static initModel(sequelize: Sequelize.Sequelize): typeof Parent 
    {
        
        return Parent.init(
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
                },
                Email: {
                    autoIncrement: false,
                    type: DataTypes.TEXT,
                    allowNull: false,
                    primaryKey: true
                }
            },
            {
                sequelize,
                tableName: 'Parent',
                schema: 'dbo',
                timestamps: false,
                indexes: []
              });
    }
}