import {UrgentType} from "../enums/UrgentType";

export class Task {
    constructor(
        readonly title: string,
        readonly details: string,
        readonly urgentType: UrgentType
    ) {}
}