"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDef = void 0;
const apollo_server_1 = require("apollo-server");
exports.typeDef = (0, apollo_server_1.gql) `
    input LessonFilter
    {
        id: Int
        studentId:Int
        day:Int
        teacherId: Int
    }

    input LessonInput 
    {
        filter:LessonFilter
    }
`;
//# sourceMappingURL=lessonInput.js.map