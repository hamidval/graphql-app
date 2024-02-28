"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
const sequelize_1 = require("sequelize");
class Teacher extends sequelize_1.Model {
    static initModel(sequelize) {
        return Teacher.init({
            Id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            FirstName: {
                autoIncrement: false,
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                primaryKey: true
            },
            LastName: {
                autoIncrement: false,
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                primaryKey: true
            },
            OrganisationId: {
                autoIncrement: false,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            }
        }, {
            sequelize,
            tableName: 'Teacher',
            schema: 'dbo',
            timestamps: false,
            indexes: []
        });
    }
}
exports.Teacher = Teacher;
//# sourceMappingURL=Teacher.js.map