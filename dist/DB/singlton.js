"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelizeOa = void 0;
const sequelize_1 = require("sequelize");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const PORT = process.env.PORT;
const HOST = process.env.HOST;
const DATABASE = process.env.DATABASE;
const USERNAME_OA = process.env.USERNAME_OA;
const PASSWORD = process.env.PASSWORD;
console.log(PORT);
exports.sequelizeOa = new sequelize_1.Sequelize(DATABASE, USERNAME_OA, PASSWORD, {
    host: HOST,
    port: parseInt(PORT, 10),
    dialect: 'mssql',
    dialectOptions: {
        options: {
            requestTimeout: 15000,
            multiSubnetFailover: true
        }
    }
});
//# sourceMappingURL=singlton.js.map