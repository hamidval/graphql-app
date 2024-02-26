import { gql } from 'apollo-server';

export const typeDef = gql`
input UpdateLessonSubjectInput
{
    id: Int
    subject: Int
}
`;