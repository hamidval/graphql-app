"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDef = void 0;
const apollo_server_1 = require("apollo-server");
exports.typeDef = (0, apollo_server_1.gql) `
type LessonType 
{
    Id: Int
    Subject: SubjectType
    Day: DayType
    IsALevel: Boolean
    IsWeekend: Boolean
}

enum SubjectType 
{
    Maths
    Biology
    Chemistry
    History
    Geography
    RS
    Business
    Physics
}

enum DayType 
{
    Monday
    Tuesday
    Wednesday
    Thursday
    Friday
    Saturday
    Sunday
}
`;
//# sourceMappingURL=lesson.js.map