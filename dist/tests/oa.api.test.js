"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../schema");
const { ApolloServer } = require('apollo-server');
const lesson_1 = require("../schema/types/lesson");
const parent_1 = require("../schema/types/parent");
const student_1 = require("../schema/types/student");
const lessonInput_1 = require("../schema/types/lessonInput");
const studentInput_1 = require("../schema/types/studentInput");
const parentInput_1 = require("../schema/types/parentInput");
const queryType_1 = require("../schema/types/queryType");
const updateLessonSubject_1 = require("../schema/types/mutations/updateLessonSubject");
const updateLessonSubjectInput_1 = require("../schema/types/mutations/updateLessonSubjectInput");
const takenLesson_1 = require("../schema/types/takenLesson");
const teacher_1 = require("../schema/types/teacher");
const queries_1 = require("./queries");
const OaDb_1 = __importDefault(require("../DB/OaDb"));
const sequelize_1 = require("sequelize");
const OaApi_1 = require("../Api/OaApi");
const testServer = (dataSources) => {
    return new ApolloServer({
        typeDefs: [updateLessonSubjectInput_1.typeDef, updateLessonSubject_1.typeDef, parent_1.typeDef, student_1.typeDef, lesson_1.typeDef,
            lessonInput_1.typeDef, studentInput_1.typeDef, parentInput_1.typeDef,
            queryType_1.typeDef, takenLesson_1.typeDef, teacher_1.typeDef],
        resolvers: schema_1.resolvers,
        dataSources
    });
};
describe('resolvers', () => {
    let oaDb;
    let datasources;
    let server;
    beforeEach(() => {
        let seq = new sequelize_1.Sequelize('', '', '', { host: '', port: 0, database: '', username: '', password: '', dialect: 'mssql' });
        oaDb = new OaDb_1.default(seq);
        datasources = () => {
            return {
                OaApi: new OaApi_1.OaApi(''),
                OaDb: oaDb
            };
        };
        server = testServer(datasources);
    });
    it('test parents', () => __awaiter(void 0, void 0, void 0, function* () {
        oaDb.getParents = jest.fn(() => []);
        const res = yield server.executeOperation({
            query: queries_1.QUERY_PARENT,
            variables: {}
        });
        expect(res.errors).toBe(undefined);
        expect(res).toMatchSnapshot();
    }));
    it('test students', () => __awaiter(void 0, void 0, void 0, function* () {
        oaDb.getParents = jest.fn(() => []);
        //spys on this Model
        jest.spyOn(oaDb, 'getAllStudents').mockImplementation(() => {
            return Promise.all([]);
        });
        const res = yield server.executeOperation({
            query: queries_1.QUERY_STUDENT,
            variables: { "studentInput": { "filter": { "id": 1, "includeLessons": null, "parentId": null } } }
        });
        expect(res.errors).toBe(undefined);
        expect(res).toMatchSnapshot();
    }));
    it('test lessons', () => __awaiter(void 0, void 0, void 0, function* () {
        oaDb.getParents = jest.fn(() => []);
        //spys on this Model
        jest.spyOn(oaDb, 'getLessons').mockImplementation(() => {
            return Promise.all([]);
        });
        const res = yield server.executeOperation({
            query: queries_1.QUERY_LESSON,
            variables: { "lessonInput": { "filter": { "teacherId": 1 } } }
        });
        expect(res.errors).toBe(undefined);
        expect(res).toMatchSnapshot();
    }));
    it('test taken lessons', () => __awaiter(void 0, void 0, void 0, function* () {
        oaDb.getParents = jest.fn(() => []);
        //spys on this Model
        jest.spyOn(oaDb, 'getTakenLessons').mockImplementation(() => {
            return Promise.all([]);
        });
        const res = yield server.executeOperation({
            query: queries_1.QUERY_TAKEN_LESSON,
            variables: { "takenLessonInput": { "filter": { "id": null } } }
        });
        expect(res.errors).toBe(undefined);
        expect(res).toMatchSnapshot();
    }));
    it('get lessons by teacher id', () => __awaiter(void 0, void 0, void 0, function* () {
        //spys on this Model
        jest.spyOn(oaDb, 'getLessons').mockImplementation(() => {
            return Promise.all([{ "Id": 526 }, { "Id": 979 }, { "Id": 1010 }, { "Id": 1023 }, { "Id": 1030 },
                { "Id": 1038 }, { "Id": 1089 }, {
                    "Id": 1122
                },
                {
                    "Id": 1138
                },
                {
                    "Id": 1174
                },
                {
                    "Id": 1178
                },
                {
                    "Id": 1248
                },
                {
                    "Id": 1320
                },
                {
                    "Id": 1335
                },
                {
                    "Id": 1337
                },
                {
                    "Id": 1344
                },
                {
                    "Id": 1359
                },
                {
                    "Id": 1409
                },
                {
                    "Id": 1410
                },
                {
                    "Id": 1420
                },
                {
                    "Id": 1421
                },
                {
                    "Id": 1508
                },
                {
                    "Id": 1569
                },
                {
                    "Id": 1575
                },
                {
                    "Id": 1584
                },
                {
                    "Id": 1625
                },
                {
                    "Id": 1640
                }]);
        });
        const res = yield server.executeOperation({
            query: queries_1.QUERY_LESSON,
            variables: { "lessonInput": { "filter": { "teacherId": 1 } } }
        });
        expect(res.errors).toBe(undefined);
        expect(res.data.lessons.length).toBe(27);
        expect(res).toMatchSnapshot();
    }));
});
//# sourceMappingURL=oa.api.test.js.map