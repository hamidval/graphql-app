import { gql } from 'apollo-server';

export const typeDef = gql`
    input LessonFilter
    {
        id: Int
        studentId:Int
        day:Int
        teacherId: Int
        notDay: Int
    }

    input LessonInput 
    {
        filter:LessonFilter
    }
`;