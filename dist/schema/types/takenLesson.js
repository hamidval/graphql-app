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
    
}

input TakenLessonInput
{
    filter: TakenLessonIdFilter
}

input TakenLessonIdFilter {
    id: Int
}
`;
//# sourceMappingURL=takenLesson.js.map