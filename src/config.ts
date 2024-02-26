import OaDb from "./DB/OaDb";
import { OaApi } from "./queries/queries";
import { sequelizeOa } from './DB/singlton';
import { resolvers } from "./schema";
import { typeDef as Lesson } from "./schema/types/lesson";
import { typeDef as Parent } from "./schema/types/parent";
import { typeDef as Student } from "./schema/types/student";
import { typeDef as LessonInput } from "./schema/types/lessonInput";
import { typeDef as StudentInput } from "./schema/types/studentInput";
import { typeDef as ParentInput } from "./schema/types/parentInput";
import { typeDef as QueryType } from "./schema/types/queryType";
import { typeDef as UpdateLessonSubjectType } from "./schema/types/mutations/updateLessonSubject";
import { typeDef as UpdateLessonSubjectInputType } from "./schema/types/mutations/updateLessonSubjectInput";
import { typeDef as TakenLesson } from "./schema/types/takenLesson";
import { typeDef as Teacher } from "./schema/types/teacher";

export interface RequestHeaders {
    'accept-language': string;
  }

export class RequestQuery {
    body: string;
  
    constructor(body?: string) {
      this.body = body ?? '';
    }
  
    contains = function (node: string) {
      return this.body.match(new RegExp(`\\b${node}\\b`, 'i'));
    };
  }
  
  export interface Request {
    headers: RequestHeaders;
    query: RequestQuery;
  }
  

export interface Context  {
    dataSources: {
        OaApi: OaApi;
        OaDb: OaDb;
    };
    request: Request;
  }
 
const dataSources = (): Context["dataSources"] => {
    return {
      OaApi: new OaApi(),
      OaDb: (new OaDb(sequelizeOa))
  };
}

export const config:any = 
{ 
    typeDefs:[
        UpdateLessonSubjectInputType, UpdateLessonSubjectType, Parent, Student, Lesson,
        LessonInput, StudentInput, ParentInput,
        QueryType, TakenLesson, Teacher
        ],
    dataSources,
    resolvers
}