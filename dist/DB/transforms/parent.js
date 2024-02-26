"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ParentTransforms {
    parents(parents) {
        return parents.map((x) => this.parent(x));
    }
    parent(parent) {
        return {
            Id: parent.Id,
            FirstName: parent.FirstName,
            LastName: parent.LastName,
            Email: this.email(parent.Email)
        };
    }
    email(email) {
        return email.slice(0, 6) + "*******";
    }
}
exports.default = ParentTransforms;
//# sourceMappingURL=parent.js.map