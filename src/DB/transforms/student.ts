import { Student } from "../models/Student";
import {Student as _Student}  from "../../generated/graphql"

export default class StudentTransforms 
{
    constructor(){}
    
    
    public students(students: Student[]):_Student[] {

        return students.map(x => this.student(x))
    }


    public student(student: Student): _Student{
        return{
            Id: student.Id,
            FirstName: student.FirstName,
            LastName: student.LastName,
            ParentId: student.parent.Id
        }
    }   
}