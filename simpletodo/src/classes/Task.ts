import {UrgentType} from "../enums/UrgentType";

export class Task {
    constructor(
        readonly title: string,
        readonly details: string,
        private urgentType: UrgentType
    ) {}

    format() {
        return `${this.details}`;
    }
}