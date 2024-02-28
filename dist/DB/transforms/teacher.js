"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherTransform = void 0;
class TeacherTransform {
    constructor() {
    }
    teachers(teachers) {
        return teachers.map((x) => this.teacher(x));
    }
    teacher(teacher) {
        return {
            Id: teacher.Id,
            FirstName: teacher.FirstName,
            LastName: teacher.LastName,
            OrganisationId: teacher.OrganisationId
        };
    }
}
exports.TeacherTransform = TeacherTransform;
//# sourceMappingURL=teacher.js.map