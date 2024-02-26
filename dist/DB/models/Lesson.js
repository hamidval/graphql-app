"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lesson = void 0;
const sequelize_1 = require("sequelize");
class Lesson extends sequelize_1.Model {
    static initModel(sequelize) {
        return Lesson.init({
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
                primaryKey: false
            },
            Day: {
                autoIncrement: false,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: false
            }
        }, {
            sequelize,
            tableName: 'Lesson',
            schema: 'dbo',
            timestamps: false,
            indexes: []
        });
    }
}
exports.Lesson = Lesson;
//# sourceMappingURL=Lesson.js.map