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
const apollo_server_1 = require("apollo-server");
const schema_1 = require("../schema");
const lesson_1 = require("../schema/types/lesson");
const parent_1 = require("../schema/types/parent");
const student_1 = require("../schema/types/student");
const lessonInput_1 = require("../schema/types/lessonInput");
const studentInput_1 = require("../schema/types/studentInput");
const parentInput_1 = require("../schema/types/parentInput");
const queryType_1 = require("../schema/types/queryType");
const updateLessonSubject_1 = require("../schema/types/mutations/updateLessonSubject");
const updateLessonSubjectInput_1 = require("../schema/types/mutations/updateLessonSubjectInput");
const Parent_1 = require("../DB/models/Parent");
const queries_1 = require("./queries");
const OaDb_1 = __importDefault(require("../DB/OaDb"));
const init_models_1 = require("../DB/models/init-models");
const testServer = (dataSources) => {
    return new apollo_server_1.ApolloServer({
        typeDefs: [updateLessonSubject_1.typeDef, updateLessonSubjectInput_1.typeDef, parent_1.typeDef, student_1.typeDef, lesson_1.typeDef,
            lessonInput_1.typeDef, studentInput_1.typeDef, parentInput_1.typeDef,
            queryType_1.typeDef],
        resolvers: schema_1.resolvers,
        dataSources
    });
};
describe('resolvers', () => __awaiter(void 0, void 0, void 0, function* () {
    let oaDb;
    beforeEach(() => {
        oaDb = new OaDb_1.default({ host: '', port: '', database: '', username: '', password: '', dialect: 'mssql' }, init_models_1.initModels);
    });
    it('random test', () => __awaiter(void 0, void 0, void 0, function* () {
        const server = testServer(() => ({}));
        oaDb.getParents = jest.fn(() => []);
        //spys on this Model
        jest.spyOn(Parent_1.Parent, 'findAll').mockImplementation(() => {
            return Promise.all([]);
        });
        const res = yield server.executeOperation({
            query: queries_1.QUERY_STUDENT,
            variables: { studentInput: { filter: { id: null, include: false } } }
        });
        expect(res.errors).toBe(undefined);
        expect(res).toMatchSnapshot();
    }));
}));
//# sourceMappingURL=oa.api.test.js.map