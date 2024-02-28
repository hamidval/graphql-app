"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDef = void 0;
const apollo_server_1 = require("apollo-server");
exports.typeDef = (0, apollo_server_1.gql) `
    input StudentInput
    {
        filter: StudentIdFilter
    }

    input StudentIdFilter {
        id: Int
        parentId: Int
        includeLessons: Boolean
    }
`;
//# sourceMappingURL=studentInput.js.map