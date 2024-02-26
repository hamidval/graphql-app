import { gql } from 'apollo-server';

export const typeDef = gql`
type LessonType 
{
    Id: Int
    Subject: SubjectType
    Day: DayType
    IsALevel: Boolean
    IsWeekend: Boolean
    GroupFee: Float
    GroupPay: Float
    SingleFee: Float
    SinglePay: Float
}

enum SubjectType 
{
    Maths
    Biology
    Chemistry
    History
    Geography
    RS
    Business
    Physics
}

enum DayType 
{
    Monday
    Tuesday
    Wednesday
    Thursday
    Friday
    Saturday
    Sunday
}
`;