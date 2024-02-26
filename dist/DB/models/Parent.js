"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parent = void 0;
const sequelize_1 = require("sequelize");
class Parent extends sequelize_1.Model {
    static initModel(sequelize) {
        return Parent.init({
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
            },
            Email: {
                autoIncrement: false,
                type: sequelize_1.DataTypes.TEXT,
                allowNull: false,
                primaryKey: true
            }
        }, {
            sequelize,
            tableName: 'Parent',
            schema: 'dbo',
            timestamps: false,
            indexes: []
        });
    }
}
exports.Parent = Parent;
//# sourceMappingURL=Parent.js.map