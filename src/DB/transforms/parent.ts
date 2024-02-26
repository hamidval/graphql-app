

import { Parent } from "../models/Parent";
import { Parent as _Parent } from "../../generated/graphql"

export default class ParentTransforms
{
    public parents(parents: Parent[]) : _Parent[]
    {
        return parents.map((x) => this.parent(x));
    }

    public parent(parent: Parent): _Parent
    {
        return {
            Id: parent.Id,
            FirstName: parent.FirstName,
            LastName: parent.LastName,
            Email: this.email(parent.Email)

        }
    }

    private email(email: String): String
    {
        return email.slice(0,6) + "*******"
    }
}