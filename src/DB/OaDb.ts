import { FindOptions } from "sequelize";
import { SequelizeDataSource } from "./index";
import { Lesson } from "./models/Lesson";
import { Student } from "./models/Student";
import { Parent } from "./models/Parent";
import { TakenLesson } from "./models/TakenLesson"
import { Where } from "sequelize/types/utils";
import { whiteList } from "../utils";
import { Teacher } from "./models/Teacher";
import { TeacherTransform } from "./transforms/teacher";
import TakenLessonTransforms from "./transforms/takenLesson";


type where ={
  id?: number | null | number[],
  day?: number,
  studentId?: number,
  teacherId?: number | number[],
  parentId?:number | number [] 
}

export default class OaDb extends SequelizeDataSource 
{
    public async getParents(id:number | null = null)
    {
      var query:FindOptions = {attributes:['Id', 'FirstName', 'LastName', 'Email']}

      if(id == null)
      {
        query.limit = 10;
      }else
      {
        query.where = {id:id}       
      }  

      var data = await Parent.findAll(query)
      
      return data;
    
    }

      public async getStudents(parentId:any): Promise<any[]> {    
        var data =  (await this.client.query(`SELECT * FROM Student WHERE ParentId = ${parentId}`, {
            type: 'SELECT'
          })) as Array<any>;   

       return data;
     }


     
     public async getAllStudents(id:number | null = null, parentId:number | null = null,  inlcudeLessons: boolean = false)
     {
      var query:FindOptions = {}
      let where: where = {}

      if(id == null && parentId == null)
      {
        query.limit = 10;
      }
      
      if(id) {
        where.id = id       
      }

      if(parentId){
        where.parentId = parentId
      }

      if(inlcudeLessons)
      {
        query.include = [{model:Lesson, as: "Lessons"}]
      }     

      query.where = where;
      var data = await Student.findAll(query)
      return data;
      
     }

     public async getLessons(id:number | null = null, day: number | null, studentId: number | null, teacherId: number | null)
     {
      var query:FindOptions = {}

      let _where:where = {}
      _where.teacherId = whiteList();
      if(id == null && studentId == null && day == null && teacherId == null)
      {
        query.limit = 10;
      }else
      {
        
        if(id) {
          _where.id = id  
        }

        if(studentId) {
          _where.studentId = studentId
        }

        if(day){
          _where.day = day
        }

        if(teacherId)
        {
          _where.teacherId = whiteList(teacherId);
        }
             
      }  
      query.where = _where;
      var data = await Lesson.findAll(query)
      
      return data;
      
     }

     public async getTakenLessons(
      id:number | null = null, 
      teacherId: number | null = null, 
      studentId: number | null = null)
     {
      var query:FindOptions = {}

      let _where:where = {}
      _where.teacherId = whiteList();
      if(id == null && teacherId == null && studentId == null)
      {
        query.limit = 10;
      }
      if(id) {
        _where = {id:id}       
      }
      
      if(teacherId){
        _where.teacherId = whiteList(teacherId);
      }

      if(studentId){
        _where.studentId = studentId
      }

      query.where = _where;
      var data = new TakenLessonTransforms().takenLessons(await TakenLesson.findAll(query));
      
      return data;
      
     }

     public async getAllTeachers(id:number | null)
     {
        let query:FindOptions = {}
        let _where:where = {}
        
        if(id != null){
          _where.id = whiteList(id);
        }
        else 
        {
          _where.id = whiteList()
        }

        query.where = _where;
        var data = await Teacher.findAll(query);
        return new TeacherTransform().teachers(data)
     }

     public async updateLessonSubject(id:number, subject:number) : Promise<Lesson>
     {
        var lesson  =  await Lesson.findOne({where:{id:id}});
        lesson.update({Subject: subject})
        lesson.save();
        return lesson;
     }

      public async connect(): Promise<string> {
        try {
          await this.client.authenticate();
    
          return `Connected to`;
        } catch (error) {
          return error;
        }
      }
}