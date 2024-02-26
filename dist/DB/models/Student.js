"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const sequelize_1 = require("sequelize");
class Student extends sequelize_1.Model {
    static initModel(sequelize) {
        return Student.init({
            Id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            FirstName: {
                autoIncrement: false,
                type: sequelize_1.DataTypes.TEXT,
                allowNull: false,
                primaryKey: true
            },
            LastName: {
                autoIncrement: false,
                type: sequelize_1.DataTypes.TEXT,
                allowNull: false,
                primaryKey: true
            }
        }, {
            sequelize,
            tableName: 'Student',
            schema: 'dbo',
            timestamps: false,
            indexes: []
        });
    }
}
exports.Student = Student;
//# sourceMappingURL=Student.js.map