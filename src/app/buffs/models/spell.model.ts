import { SpellValue } from './spellValue.model';

export class Spell {
    public name: string;
    public id: string;
    public duration: string;
    public type: string;
    public level: number;
    public clas: string;
    public value: SpellValue[];
    public notes: string;

    constructor(name: string,
                id: string,
                duration: string,
                type: string,
                level: number,
                clas: string,
                value: SpellValue[],
                notes?: string) {
            this.name = name;
            this.id = id;
            this.duration = duration;
            this.type = type;
            this.level = level;
            this.clas = clas;
            this.value = value;
            this.notes = notes;
}
}
