import { SpellValue } from './spellValue.model';

export class Equipment {
    public name: string;
    public id: string;
    public duration: string;
    public type: string;
    public value: SpellValue[];
    public notes: string;

    constructor(name: string,
                id: string,
                duration: string,
                type: string,
                value: SpellValue[],
                notes?: string) {
            this.name = name;
            this.id = id;
            this.duration = duration;
            this.type = type;
            this.value = value;
            this.notes = notes;
}
}
