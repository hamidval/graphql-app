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
const index_1 = require("./index");
const Lesson_1 = require("./models/Lesson");
const Student_1 = require("./models/Student");
const Parent_1 = require("./models/Parent");
const TakenLesson_1 = require("./models/TakenLesson");
const utils_1 = require("../utils");
const Teacher_1 = require("./models/Teacher");
const teacher_1 = require("./transforms/teacher");
const takenLesson_1 = __importDefault(require("./transforms/takenLesson"));
class OaDb extends index_1.SequelizeDataSource {
    getParents(id = null) {
        return __awaiter(this, void 0, void 0, function* () {
            var query = { attributes: ['Id', 'FirstName', 'LastName', 'Email'] };
            if (id == null) {
                query.limit = 10;
            }
            else {
                query.where = { id: id };
            }
            var data = yield Parent_1.Parent.findAll(query);
            return data;
        });
    }
    getStudents(parentId) {
        return __awaiter(this, void 0, void 0, function* () {
            var data = (yield this.client.query(`SELECT * FROM Student WHERE ParentId = ${parentId}`, {
                type: 'SELECT'
            }));
            return data;
        });
    }
    getAllStudents(id = null, parentId = null, inlcudeLessons = false) {
        return __awaiter(this, void 0, void 0, function* () {
            var query = {};
            let where = {};
            if (id == null && parentId == null) {
                query.limit = 10;
            }
            if (id) {
                where.id = id;
            }
            if (parentId) {
                where.parentId = parentId;
            }
            if (inlcudeLessons) {
                query.include = [{ model: Lesson_1.Lesson, as: "Lessons" }];
            }
            query.where = where;
            var data = yield Student_1.Student.findAll(query);
            return data;
        });
    }
    getLessons(id = null, day, studentId, teacherId) {
        return __awaiter(this, void 0, void 0, function* () {
            var query = {};
            let _where = {};
            _where.teacherId = (0, utils_1.whiteList)();
            if (id == null && studentId == null && day == null && teacherId == null) {
                query.limit = 10;
            }
            else {
                if (id) {
                    _where.id = id;
                }
                if (studentId) {
                    _where.studentId = studentId;
                }
                if (day) {
                    _where.day = day;
                }
                if (teacherId) {
                    _where.teacherId = (0, utils_1.whiteList)(teacherId);
                }
            }
            query.where = _where;
            var data = yield Lesson_1.Lesson.findAll(query);
            return data;
        });
    }
    getTakenLessons(id = null, teacherId = null, studentId = null) {
        return __awaiter(this, void 0, void 0, function* () {
            var query = {};
            let _where = {};
            _where.teacherId = (0, utils_1.whiteList)();
            if (id == null && teacherId == null && studentId == null) {
                query.limit = 10;
            }
            if (id) {
                _where = { id: id };
            }
            if (teacherId) {
                _where.teacherId = (0, utils_1.whiteList)(teacherId);
            }
            if (studentId) {
                _where.studentId = studentId;
            }
            query.where = _where;
            var data = new takenLesson_1.default().takenLessons(yield TakenLesson_1.TakenLesson.findAll(query));
            return data;
        });
    }
    getAllTeachers(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = {};
            let _where = {};
            if (id != null) {
                _where.id = (0, utils_1.whiteList)(id);
            }
            else {
                _where.id = (0, utils_1.whiteList)();
            }
            query.where = _where;
            var data = yield Teacher_1.Teacher.findAll(query);
            return new teacher_1.TeacherTransform().teachers(data);
        });
    }
    updateLessonSubject(id, subject) {
        return __awaiter(this, void 0, void 0, function* () {
            var lesson = yield Lesson_1.Lesson.findOne({ where: { id: id } });
            lesson.update({ Subject: subject });
            lesson.save();
            return lesson;
        });
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.client.authenticate();
                return `Connected to`;
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.default = OaDb;
//# sourceMappingURL=OaDb.js.map