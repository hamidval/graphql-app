import { gql } from "apollo-server";

export const QUERY_STUDENT = gql`
query Query($studentInput: StudentInput) {
  students(studentInput: $studentInput) {
    Id
  }
}
`;


export const QUERY_PARENT = gql`
query Query {
  parents {
    Id
  }
}
`;



export const QUERY_LESSON = gql`
query Query($lessonInput: LessonInput) {
  lessons(lessonInput: $lessonInput) {
    Id
  }
}
`;


export const QUERY_TAKEN_LESSON = gql`
query Query($takenLessonInput: TakenLessonInput) {
  takenLessons(takenLessonInput: $takenLessonInput) {
    Id
  }
}
`;



