"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDef = void 0;
const apollo_server_1 = require("apollo-server");
exports.typeDef = (0, apollo_server_1.gql) `
input UpdateLessonSubjectInput
{
    id: Int
    subject: Int
}
`;
//# sourceMappingURL=updateLessonSubjectInput.js.map