import { Lesson } from "../models/Lesson";
import {Lesson as _Lesson} from "../../generated/graphql"

export default class LessonTransforms 
{
    constructor()
    {

    }

    public lessons(lessons: Lesson[]) : _Lesson[]
    {
   
        return lessons.map((x)=> this.lesson(x));
       

    }

    private lesson(lesson: Lesson): _Lesson
    {
        return  {
            Id: lesson.Id,
            Day: lesson.Day,
            Subject: lesson.Subject,
            IsALevel:this.isALevel(lesson.Subject),
            IsWeekend: this.isWeekend(lesson.Day),
            SingleFee: lesson.SingleFee,
            SinglePay: lesson.SinglePay,
            GroupFee: lesson.GroupFee,
            GroupPay: lesson.GroupPay
        };
    }

    private isALevel(subject: number): boolean
    {
        if(subject == 0 || subject == 1 || subject == 2)
        {
            return true;
        }

        return false;
    }

    private isWeekend(day: number): boolean
    {
        if(day == 6 || day == 0)
        {
            return true;
        }

        return false;
    }
}