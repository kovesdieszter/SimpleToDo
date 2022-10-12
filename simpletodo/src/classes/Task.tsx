import {UrgentType} from '../enums/UrgentType';

export class Task {
    constructor(
        readonly id: string,
        readonly title: string,
        readonly details: string,
        readonly urgentType: UrgentType
    ) {}
}
