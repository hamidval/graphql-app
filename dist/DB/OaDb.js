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
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const Lesson_1 = require("./models/Lesson");
const Student_1 = require("./models/Student");
const Parent_1 = require("./models/Parent");
const TakenLesson_1 = require("./models/TakenLesson");
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
    getAllStudents(id = null, inlcudeLessons = false) {
        return __awaiter(this, void 0, void 0, function* () {
            var query = {};
            if (id == null) {
                query.limit = 10;
            }
            else {
                query.where = { id: id };
            }
            if (inlcudeLessons) {
                query.include = [{ model: Lesson_1.Lesson, as: "Lessons" }];
            }
            var data = yield Student_1.Student.findAll(query);
            return data;
        });
    }
    getLessons(id = null) {
        return __awaiter(this, void 0, void 0, function* () {
            var query = {};
            if (id == null) {
                query.limit = 10;
            }
            else {
                query.where = { id: id };
            }
            var data = yield Lesson_1.Lesson.findAll(query);
            return data;
        });
    }
    getTakenLessons(id = null) {
        return __awaiter(this, void 0, void 0, function* () {
            var query = {};
            if (id == null) {
                query.limit = 10;
            }
            else {
                query.where = { id: id };
            }
            var data = yield TakenLesson_1.TakenLesson.findAll(query);
            return data;
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