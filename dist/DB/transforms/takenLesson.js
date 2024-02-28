"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
class TakenLessonTransforms {
    constructor() { }
    takenLessons(takenLessons) {
        return takenLessons.map((x) => this.takenLesson(x));
    }
    takenLesson(takenLesson) {
        return {
            Id: takenLesson.Id,
            Subject: takenLesson.Subject,
            Hours: takenLesson.Hours,
            Status: this.getStatus(takenLesson.LessonCode),
            Date: (0, utils_1.formatDate)(takenLesson.LessonDate),
            TotalFee: takenLesson.TotalFee,
            TotalPay: takenLesson.TotalPay,
            StudentId: takenLesson.StudentId
        };
    }
    getStatus(code) {
        switch (code) {
            case 0:
                // code block
                return "Standard";
            case 1:
                // code block
                return "Cover";
            case 2:
                return "Informed";
            case 3:
            default:
                return null;
        }
    }
}
exports.default = TakenLessonTransforms;
//# sourceMappingURL=takenLesson.js.map