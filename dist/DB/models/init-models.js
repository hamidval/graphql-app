"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initModels = void 0;
const Lesson_1 = require("./Lesson");
const Parent_1 = require("./Parent");
const Student_1 = require("./Student");
const TakenLesson_1 = require("./TakenLesson");
const Teacher_1 = require("./Teacher");
function initModels(sequelize) {
    const Lesson = Lesson_1.Lesson.initModel(sequelize);
    const Parent = Parent_1.Parent.initModel(sequelize);
    const Student = Student_1.Student.initModel(sequelize);
    const TakenLesson = TakenLesson_1.TakenLesson.initModel(sequelize);
    const Teacher = Teacher_1.Teacher.initModel(sequelize);
    Student.belongsTo(Parent, { as: "Parent", foreignKey: "ParentId" });
    Parent.hasMany(Student, { as: "students", foreignKey: "ParentId" });
    Lesson.belongsTo(Student, { as: "Student", foreignKey: "StudentId" });
    Student.hasMany(Lesson, { as: "Lessons", foreignKey: "StudentId" });
    TakenLesson.belongsTo(Student, { as: "Student", foreignKey: "StudentId" });
    Student.hasMany(TakenLesson, { as: "TakenLessons", foreignKey: "StudentId" });
    return;
    {
        Lesson;
        Student;
        Parent;
        TakenLesson;
        Teacher;
    }
}
exports.initModels = initModels;
//# sourceMappingURL=init-models.js.map