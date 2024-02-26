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
exports.resolvers = void 0;
const lesson_1 = __importDefault(require("../DB/transforms/lesson"));
const parent_1 = __importDefault(require("../DB/transforms/parent"));
const takenLesson_1 = __importDefault(require("../DB/transforms/takenLesson"));
const utils_1 = require("../utils");
const enums_1 = require("./enums");
exports.resolvers = {
    SubjectType: utils_1.Enum.toResolver(enums_1.Subjects),
    DayType: utils_1.Enum.toResolver(enums_1.Day),
    Query: {
        // connect: async (ctx) => ctx.datasources.OaDb.connect(),
        parents: (_, args, ctx) => __awaiter(void 0, void 0, void 0, function* () {
            var parents = new parent_1.default().parents(yield ctx.dataSources.OaDb.getParents(null));
            // await Promise.all(parents.map(async(parent, index)=>
            // {
            //     parent.Students = await ctx.dataSources.OaDb.getStudents(parent.Id);
            //     await Promise.all(parent.Students.map(async(student, index)=>
            //     {
            //         student.Lessons = await ctx.dataSources.OaDb.getLessons(student.Id);
            //     }))
            // }))
            return parents;
        }),
        students: (_, args, ctx) => __awaiter(void 0, void 0, void 0, function* () {
            const { studentInput: { filter: { id: id, inlcudeLessons: inlcudeLessons } } } = args;
            return yield ctx.dataSources.OaDb.getAllStudents(id, inlcudeLessons);
        }),
        lessons: (_, args, ctx) => __awaiter(void 0, void 0, void 0, function* () {
            const { lessonInput: { filter: { id: id, studentId: studentId } } } = args;
            var lessons = (new lesson_1.default()).lessons(yield ctx.dataSources.OaDb.getLessons(id));
            return lessons;
        }),
        takenLessons: (_, args, ctx) => __awaiter(void 0, void 0, void 0, function* () {
            const { takenLessonInput: { filter: { id: id } } } = args;
            var takenLessons = (new takenLesson_1.default).takenLessons(yield ctx.OaDb.getTakenLessons(id));
            return takenLessons;
        })
    },
    Mutation: {
        updateLessonSubject: (_, args, ctx) => __awaiter(void 0, void 0, void 0, function* () {
            const { updateLessonSubjectInput: { id: id, subject: subject } } = args;
            return yield ctx.dataSources.OaDb.updateLessonSubject(id, subject);
        })
    }
};
//# sourceMappingURL=index.js.map