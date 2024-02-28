import { gql } from 'apollo-server';

export const typeDef = gql`
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