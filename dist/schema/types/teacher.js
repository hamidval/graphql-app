"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDef = void 0;
const apollo_server_1 = require("apollo-server");
exports.typeDef = (0, apollo_server_1.gql) `
type TeacherType 
{
    Id: Int
    FirstName: String
    LastName: String
    OrganisationId: Int
}

input TeacherInput
{
    filter: IdFilter
}  
`;
//# sourceMappingURL=teacher.js.map