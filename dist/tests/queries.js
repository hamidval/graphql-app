"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QUERY_STUDENT = void 0;
const graphql_tag_1 = require("graphql-tag");
exports.QUERY_STUDENT = (0, graphql_tag_1.gql) `
  query students(studentInput: StudentInput) {
    Id
  }
`;
//# sourceMappingURL=queries.js.map