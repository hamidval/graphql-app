"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QUERY_TAKEN_LESSON = exports.QUERY_LESSON = exports.QUERY_PARENT = exports.QUERY_STUDENT = void 0;
const apollo_server_1 = require("apollo-server");
exports.QUERY_STUDENT = (0, apollo_server_1.gql) `
query Query($studentInput: StudentInput) {
  students(studentInput: $studentInput) {
    Id
  }
}
`;
exports.QUERY_PARENT = (0, apollo_server_1.gql) `
query Query {
  parents {
    Id
  }
}
`;
exports.QUERY_LESSON = (0, apollo_server_1.gql) `
query Query($lessonInput: LessonInput) {
  lessons(lessonInput: $lessonInput) {
    Id
  }
}
`;
exports.QUERY_TAKEN_LESSON = (0, apollo_server_1.gql) `
query Query($takenLessonInput: TakenLessonInput) {
  takenLessons(takenLessonInput: $takenLessonInput) {
    Id
  }
}
`;
//# sourceMappingURL=queries.js.map