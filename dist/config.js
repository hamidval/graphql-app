"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.RequestQuery = void 0;
const OaDb_1 = __importDefault(require("./DB/OaDb"));
const queries_1 = require("./queries/queries");
const singlton_1 = require("./DB/singlton");
const schema_1 = require("./schema");
const lesson_1 = require("./schema/types/lesson");
const parent_1 = require("./schema/types/parent");
const student_1 = require("./schema/types/student");
const lessonInput_1 = require("./schema/types/lessonInput");
const studentInput_1 = require("./schema/types/studentInput");
const parentInput_1 = require("./schema/types/parentInput");
const queryType_1 = require("./schema/types/queryType");
const updateLessonSubject_1 = require("./schema/types/mutations/updateLessonSubject");
const updateLessonSubjectInput_1 = require("./schema/types/mutations/updateLessonSubjectInput");
const takenLesson_1 = require("./schema/types/takenLesson");
const teacher_1 = require("./schema/types/teacher");
class RequestQuery {
    constructor(body) {
        this.contains = function (node) {
            return this.body.match(new RegExp(`\\b${node}\\b`, 'i'));
        };
        this.body = body !== null && body !== void 0 ? body : '';
    }
}
exports.RequestQuery = RequestQuery;
const dataSources = () => {
    return {
        OaApi: new queries_1.OaApi(),
        OaDb: (new OaDb_1.default(singlton_1.sequelizeOa))
    };
};
exports.config = {
    typeDefs: [
        updateLessonSubjectInput_1.typeDef, updateLessonSubject_1.typeDef, parent_1.typeDef, student_1.typeDef, lesson_1.typeDef,
        lessonInput_1.typeDef, studentInput_1.typeDef, parentInput_1.typeDef,
        queryType_1.typeDef, takenLesson_1.typeDef, teacher_1.typeDef
    ],
    dataSources,
    resolvers: schema_1.resolvers
};
//# sourceMappingURL=config.js.map