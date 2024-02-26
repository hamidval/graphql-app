"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LessonTransforms {
    constructor() {
    }
    lessons(lessons) {
        return lessons.map((x) => this.lesson(x));
    }
    lesson(lesson) {
        return {
            Id: lesson.Id,
            Day: lesson.Day,
            Subject: lesson.Subject,
            IsALevel: this.isALevel(lesson.Subject),
            IsWeekend: this.isWeekend(lesson.Day)
        };
    }
    isALevel(subject) {
        if (subject == 0 || subject == 1 || subject == 2) {
            return true;
        }
        return false;
    }
    isWeekend(day) {
        if (day == 6 || day == 0) {
            return true;
        }
        return false;
    }
}
exports.default = LessonTransforms;
//# sourceMappingURL=lesson.js.map