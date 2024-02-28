

import { resolvers } from '../schema'
const { ApolloServer } = require('apollo-server');
import { typeDef as Lesson } from "../schema/types/lesson";
import { typeDef as Parent } from "../schema/types/parent";
import { typeDef as Student } from "../schema/types/student";
import { typeDef as LessonInput } from "../schema/types/lessonInput";
import { typeDef as StudentInput } from "../schema/types/studentInput";
import { typeDef as ParentInput } from "../schema/types/parentInput";
import { typeDef as QueryType } from "../schema/types/queryType";
import { typeDef as UpdateLessonSubjectType } from "../schema/types/mutations/updateLessonSubject";
import { typeDef as UpdateLessonSubjectInputType } from "../schema/types/mutations/updateLessonSubjectInput";
import { typeDef as TakenLesson } from "../schema/types/takenLesson";
import { typeDef as Teacher } from "../schema/types/teacher";

import {Parent as ParentModel } from '../DB/models/Parent'
import {Student as StudentModel } from '../DB/models/Student'

import { QUERY_STUDENT, QUERY_PARENT, QUERY_LESSON, QUERY_TAKEN_LESSON } from './queries';
import OaDb from "../DB/OaDb";
import { Sequelize } from "sequelize";
import { Context } from "../config";
import { OaApi } from "../Api/OaApi";
const  testServer = (dataSources) : typeof ApolloServer =>
{
    return new ApolloServer({
        typeDefs:[UpdateLessonSubjectInputType, UpdateLessonSubjectType, Parent, Student, Lesson,
            LessonInput, StudentInput, ParentInput,
            QueryType, TakenLesson, Teacher],
        resolvers,
        dataSources
        });
}




describe('resolvers', () =>
{
    let oaDb;
    let datasources;
    let server;

    beforeEach(()=>
    {
        let seq = new Sequelize('', '', '', { host: '', port: 0, database: '', username: '', password: '', dialect: 'mssql' })
        oaDb = new OaDb(seq);

        datasources = (): Context["dataSources"] => {
            return {
              OaApi: new OaApi(''),
              OaDb: oaDb
          };
        }

        server = testServer(datasources);
    })

    it('test parents', async () =>
    {      

        oaDb.getParents = jest.fn(()=>[]);

        const res = await server.executeOperation({
            query: QUERY_PARENT,
            variables: { } as object
          });      
          expect(res.errors).toBe(undefined);      
         // expect(res).toMatchSnapshot();
    }); 

    it('test students', async () =>
    {

        oaDb.getParents = jest.fn(()=>[]);

        //spys on this Model
        jest.spyOn(oaDb, 'getAllStudents').mockImplementation(() =>{
            return Promise.all([]);
        })

        const res = await server.executeOperation({
            query: QUERY_STUDENT,
            variables: { "studentInput": { "filter":{"id": 1, "includeLessons": null, "parentId": null}}} as object
          });      
          expect(res.errors).toBe(undefined);      
          //expect(res).toMatchSnapshot();
    });


    it('test lessons', async () =>
    {
        oaDb.getParents = jest.fn(()=>[]);

        //spys on this Model
        jest.spyOn(oaDb, 'getLessons').mockImplementation(() =>{
            return Promise.all([]);
        })

        const res = await server.executeOperation({
            query: QUERY_LESSON,
            variables: { "lessonInput": { "filter":{"teacherId": 1}}} as object
          });      
          expect(res.errors).toBe(undefined);      
          //expect(res).toMatchSnapshot();
    }); 


    it('test taken lessons', async () =>
    {
        oaDb.getParents = jest.fn(()=>[]);

        //spys on this Model
        jest.spyOn(oaDb, 'getTakenLessons').mockImplementation(() =>{
            return Promise.all([]);
        })

        const res = await server.executeOperation({
            query: QUERY_TAKEN_LESSON,
            variables: { "takenLessonInput": { "filter":{"id": null}}} as object
          });      
          expect(res.errors).toBe(undefined);      
         // expect(res).toMatchSnapshot();
    }); 

    it('get lessons by teacher id', async () =>
    {
        //spys on this Model
        jest.spyOn(oaDb, 'getLessons').mockImplementation(() =>{
            return Promise.all([{"Id": 526},{"Id": 979},{"Id": 1010 },{"Id": 1023 }, { "Id": 1030},
              {"Id": 1038 }, { "Id": 1089 }, {
                "Id": 1122
              },
              {
                "Id": 1138
              },
              {
                "Id": 1174
              },
              {
                "Id": 1178
              },
              {
                "Id": 1248
              },
              {
                "Id": 1320
              },
              {
                "Id": 1335
              },
              {
                "Id": 1337
              },
              {
                "Id": 1344
              },
              {
                "Id": 1359
              },
              {
                "Id": 1409
              },
              {
                "Id": 1410
              },
              {
                "Id": 1420
              },
              {
                "Id": 1421
              },
              {
                "Id": 1508
              },
              {
                "Id": 1569
              },
              {
                "Id": 1575
              },
              {
                "Id": 1584
              },
              {
                "Id": 1625
              },
              {
                "Id": 1640
              }]);
        })

        const res = await server.executeOperation({
            query: QUERY_LESSON,
            variables: { "lessonInput": { "filter":{"teacherId": 1}}} as object
          });      
          expect(res.errors).toBe(undefined);   
          expect(res.data.lessons.length).toBe(27);      
          //expect(res).toMatchSnapshot();
    }); 
});