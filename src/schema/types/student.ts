import { gql } from 'apollo-server';

export const typeDef = gql`
type StudentType 
{
    Id: Int
    FirstName: String
    LastName: String
    ParentId: Int
    Lessons:[LessonType]
}
`;