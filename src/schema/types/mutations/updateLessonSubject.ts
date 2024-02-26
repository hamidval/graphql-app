import { gql } from 'apollo-server';

export const typeDef = gql`
type Mutation 
    {
        updateLessonSubject(updateLessonSubjectInput: UpdateLessonSubjectInput): LessonType
    }  
`;