"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDef = void 0;
const apollo_server_1 = require("apollo-server");
exports.typeDef = (0, apollo_server_1.gql) `
type Query 
{
    connect: String
    parents: [ParentType]
    students(studentInput: StudentInput) : [StudentType]
    lessons(lessonInput:LessonInput) : [LessonType]
    takenLessons(takenLessonInput: TakenLessonInput) : [TakenLessonType]
    teachers(teacherInput: TeacherInput) : [TeacherType]
}
`;
//# sourceMappingURL=queryType.js.map