import { gql } from 'apollo-server';

export const typeDef = gql`
type ParentType 
    {
        Id: Int
        FirstName: String
        LastName: String
        Email: String
        Students:[StudentType]
    }
`;