import { gql } from 'apollo-server';

export const typeDef = gql`
type Query 
{
    connect: String
    parents: [ParentType]
    students(studentInput: StudentInput) : [StudentType]
    lessons(lessonInput:LessonInput) : [LessonType]
    takenLessons(takenLessonInput: TakenLessonInput) : [TakenLessonType]
    teachers(teacherInput: TeacherInput) : [TeacherType]
}
`;