import { gql } from 'apollo-server';

export const typeDef = gql`
type TakenLessonType 
{
    Id: Int
    Subject: SubjectType    
    Hours: Float
    Status: String
    TotalPay: Float
    TotalFee: Float
    Date: String
    StudentId: Int
    
}

input TakenLessonInput
{
    filter: TakenLessonIdFilter
}

input TakenLessonIdFilter {
    id: Int
    studentId: Int
    teacherId: Int
}
`;