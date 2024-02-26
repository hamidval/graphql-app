import { Lesson } from "../models/Lesson";
import {Lesson as _Lesson} from "../../generated/graphql"

export default class SubjectTransforms 
{
    public subject(name: string)
    {
        return name.toLocaleLowerCase();
    }

    public lessons(lessons: Lesson[])
    {
   
        return lessons;
       

    }
}