"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
            Status: this.getStatus(takenLesson.Code)
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