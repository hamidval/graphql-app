import { DataTypes, Model } from "sequelize";
import * as Sequelize from "sequelize";



export class Teacher extends Model {

    Id: number;
    FirstName:string;
    LastName:string
    OrganisationId:number
    static initModel(sequelize: Sequelize.Sequelize): typeof Teacher
    {        
        return Teacher.init(
            {
                Id: {
                    autoIncrement: true,
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true
                },
                FirstName: {
                    autoIncrement: false,
                    type: DataTypes.STRING,
                    allowNull: false,
                    primaryKey: true
                },
                LastName: {
                    autoIncrement: false,
                    type: DataTypes.STRING,
                    allowNull: false,
                    primaryKey: true
                },
                OrganisationId: {
                    autoIncrement: false,
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true
                }
            },
            {
                sequelize,
                tableName: 'Teacher',
                schema: 'dbo',
                timestamps: false,
                indexes: []
              });
    }
}