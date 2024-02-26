import { gql } from 'apollo-server';

export const typeDef = gql`
    input IdFilter {
        id: Int
    }    

    input ParentInput
    {
        filter: IdFilter
    }  
`;