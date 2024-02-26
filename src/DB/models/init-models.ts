import { Sequelize } from "sequelize";
import { Lesson as _Lesson } from "./Lesson";
import { Parent as _Parent } from "./Parent";
import { Student as _Student } from "./Student";
import { TakenLesson as _TakenLesson } from "./TakenLesson";
import {Teacher as _Teacher} from './Teacher';
export function initModels(sequelize: Sequelize)
{
    const Lesson = _Lesson.initModel(sequelize);
    const Parent = _Parent.initModel(sequelize);
    const Student = _Student.initModel(sequelize);
    const TakenLesson = _TakenLesson.initModel(sequelize);
    const Teacher = _Teacher.initModel(sequelize);

    Student.belongsTo(Parent, { as: "Parent", foreignKey: "ParentId"});
    Parent.hasMany(Student, { as: "students", foreignKey: "ParentId"});

    Lesson.belongsTo(Student, { as: "Student", foreignKey: "StudentId"});
    Student.hasMany(Lesson, { as: "Lessons", foreignKey: "StudentId"});

    TakenLesson.belongsTo(Student, {as: "Student", foreignKey: "StudentId"});
    Student.hasMany(TakenLesson, {as: "TakenLessons", foreignKey: "StudentId"});


    return 
    {
        Lesson
        Student
        Parent
        TakenLesson
        Teacher
    }
}