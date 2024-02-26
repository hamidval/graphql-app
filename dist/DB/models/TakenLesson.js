"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TakenLesson = void 0;
const sequelize_1 = require("sequelize");
class TakenLesson extends sequelize_1.Model {
    static initModel(sequelize) {
        return TakenLesson.init({
            Id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            Subject: {
                autoIncrement: false,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            Code: {
                autoIncrement: false,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            Hours: {
                autoIncrement: false,
                type: sequelize_1.DataTypes.DECIMAL,
                allowNull: false,
                primaryKey: true
            }
        }, {
            sequelize,
            tableName: 'TakenLesson',
            schema: 'dbo',
            timestamps: false,
            indexes: []
        });
    }
}
exports.TakenLesson = TakenLesson;
//# sourceMappingURL=TakenLesson.js.map