import { TakenLesson } from "../models/TakenLesson";
import { TakenLesson as _TakenLesson } from "../../generated/graphql";
import { formatDate } from "../../utils";
export default class TakenLessonTransforms 
{
    constructor(){}

    public takenLessons(takenLessons: TakenLesson[]): _TakenLesson[]
    {
        return takenLessons.map((x) => this.takenLesson(x))
    }

    private takenLesson(takenLesson: TakenLesson) : _TakenLesson
    {
        return {
            Id: takenLesson.Id,
            Subject: takenLesson.Subject,
            Hours: takenLesson.Hours,
            Status: this.getStatus(takenLesson.LessonCode),
            Date: formatDate(takenLesson.LessonDate),
            TotalFee: takenLesson.TotalFee,
            TotalPay: takenLesson.TotalPay,
            StudentId: takenLesson.StudentId
        }
    }

    private getStatus(code: number): string | null
    {
        switch(code) {
            case 0:
              // code block
              return "Standard"              
            case 1:
              // code block
              return "Cover"
            case 2: 
                return "Informed"
            case 3: 
            default:
              return null
          }
    }
}