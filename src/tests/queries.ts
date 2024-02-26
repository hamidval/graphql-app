import { gql } from "graphql-tag";

export const QUERY_STUDENT = gql`
  query students(studentInput: StudentInput) {
    Id
  }
`;
