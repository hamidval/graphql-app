
import LessonTransforms from '../DB/transforms/lesson';
import ParentTransforms from '../DB/transforms/parent';
import TakenLessonTransforms from '../DB/transforms/takenLesson';
import { Enum } from '../utils';

import 
{
    Subjects,
    Day
} from './enums'



export const resolvers: any =
{
    SubjectType: Enum.toResolver(Subjects),
    DayType: Enum.toResolver(Day),
    Query:
    {
       // connect: async (ctx) => ctx.datasources.OaDb.connect(),
        parents: async (_, args, ctx) => {
            
            var parents = new ParentTransforms().parents(await ctx.dataSources.OaDb.getParents(null));
            // await Promise.all(parents.map(async(parent, index)=>
            // {
            //     parent.Students = await ctx.dataSources.OaDb.getStudents(parent.Id);

            //     await Promise.all(parent.Students.map(async(student, index)=>
            //     {
            //         student.Lessons = await ctx.dataSources.OaDb.getLessons(student.Id);
            //     }))
            // }))

            return parents;
        },
        students: async (_, args, ctx) =>
        {
            
            const 
            {
                studentInput: 
                {
                    filter: {id: id, parentId: parentId, inlcudeLessons: inlcudeLessons}
                }
            } = args;

            return await ctx.dataSources.OaDb.getAllStudents(id, parentId, inlcudeLessons);         
        },
        lessons: async (_, args, ctx) =>
        {
            const 
            {
                lessonInput: 
                {
                    filter: {id: id, day: day, studentId: studentId, teacherId: teacherId, notDay: notDay}
                }
            } = args; 

            var lessons =  (new LessonTransforms()).lessons(await ctx.dataSources.OaDb.getLessons(id, day, studentId, teacherId, notDay));
         
            return lessons;
        },
        takenLessons: async(_, args, ctx) =>
        {
            const 
            {
                takenLessonInput: 
                {
                    filter: {id: id, studentId: studentId, teacherId: teacherId}
                }
            } = args; 

            var takenLessons = await ctx.dataSources.OaDb.getTakenLessons(id, teacherId, studentId);

            return takenLessons;

        },
        teachers: async(_, args, ctx) =>{

            const 
            {
                teacherInput: 
                {
                    filter: {id: id}
                }
            } = args;

            return await ctx.dataSources.OaDb.getAllTeachers(id);
        }
    },
    Mutation:
    {
        updateLessonSubject: async (_, args, ctx) =>
        {
            const 
            {
                updateLessonSubjectInput: 
                {
                    id: id,
                    subject: subject
                }
            } = args;
            return await ctx.dataSources.OaDb.updateLessonSubject(id, subject);
        }
    }
}