import { Teacher } from "../models/Teacher";
import { Teacher as _Teacher } from "../../generated/graphql";

export class TeacherTransform {


    constructor()
    {

    }


    public teachers(teachers: Teacher[]) : _Teacher[]
    {
        return teachers.map((x) => this.teacher(x))
    }

    public teacher(teacher: Teacher): _Teacher{
        return {
            Id: teacher.Id,
            FirstName: teacher.FirstName,
            LastName: teacher.LastName,
            OrganisationId: teacher.OrganisationId
        }
    }
}