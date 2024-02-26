import { DataSource } from "apollo-datasource";
import { ApolloServer } from "apollo-server";
import { resolvers } from '../schema'

import { typeDef as Lesson } from "../schema/types/lesson";
import { typeDef as Parent } from "../schema/types/parent";
import { typeDef as Student } from "../schema/types/student";
import { typeDef as LessonInput } from "../schema/types/lessonInput";
import { typeDef as StudentInput } from "../schema/types/studentInput";
import { typeDef as ParentInput } from "../schema/types/parentInput";
import { typeDef as QueryType } from "../schema/types/queryType";
import { typeDef as UpdateLessonSubjectType } from "../schema/types/mutations/updateLessonSubject";
import { typeDef as UpdateLessonSubjectInputType } from "../schema/types/mutations/updateLessonSubjectInput";

import {Parent as ParentModel } from '../DB/models/Parent'

import { QUERY_STUDENT } from './queries';
import OaDb from "../DB/OaDb";
import { initModels } from "../DB/models/init-models";
const testServer = (dataSources: any): ApolloServer => 
{
    return new ApolloServer({
        typeDefs:[UpdateLessonSubjectType, UpdateLessonSubjectInputType, Parent, Student, Lesson,
            LessonInput, StudentInput, ParentInput,
            QueryType],
        resolvers,
        dataSources
        });
}


describe('resolvers', async () =>
{
    let oaDb: any;

    beforeEach(()=>
    {
       // oaDb = new OaDb({ host: '', port: '', database: '', username: '', password: '', dialect: 'mssql' }, initModels);
    })

    it('random test', async () =>
    {
        const server = testServer(() => ({ }));

        oaDb.getParents = jest.fn(()=>[]);

        //spys on this Model
        jest.spyOn(ParentModel, 'findAll').mockImplementation(() =>{
            return Promise.all([]);
        })

        const res = await server.executeOperation({
            query: QUERY_STUDENT,
            variables: { studentInput: { filter: { id: null, include:false} } }
          });      
          expect(res.errors).toBe(undefined);      
          expect(res).toMatchSnapshot();
    });    
});