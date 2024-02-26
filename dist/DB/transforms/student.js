"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StudentTransforms {
    constructor() { }
    students(students) {
        return students.map(x => this.student(x));
    }
    student(student) {
        return {
            Id: student.Id,
            FirstName: student.FirstName,
            LastName: student.LastName,
            ParentId: student.parent.Id
        };
    }
}
exports.default = StudentTransforms;
//# sourceMappingURL=student.js.map