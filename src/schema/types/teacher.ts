import { gql } from 'apollo-server';

export const typeDef = gql`
type TeacherType 
{
    Id: Int
    FirstName: String
    LastName: String
    OrganisationId: Int
}

input TeacherInput
{
    filter: IdFilter
}  
`;