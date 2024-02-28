"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDef = void 0;
const apollo_server_1 = require("apollo-server");
exports.typeDef = (0, apollo_server_1.gql) `
type TakenLessonType 
{
    Id: Int
    Subject: SubjectType    
    Hours: Float
    Status: String
    TotalPay: Float
    TotalFee: Float
    Date: String
    StudentId: Int
    
}

input TakenLessonInput
{
    filter: TakenLessonIdFilter
}

input TakenLessonIdFilter {
    id: Int
    studentId: Int
    teacherId: Int
}
`;
//# sourceMappingURL=takenLesson.js.map