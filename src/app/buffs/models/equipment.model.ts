import { SpellValue } from './spellValue.model';

export class Equipment {
    public name: string;
    public id: string;
    public dexterityMod: number;
    public type: string;
    public value: SpellValue[];
    public notes: string;

    constructor(name: string,
                id: string,
                dexterityMod: number,
                type: string,
                value: SpellValue[],
                notes?: string) {
            this.name = name;
            this.id = id;
            this.dexterityMod = dexterityMod;
            this.type = type;
            this.value = value;
            this.notes = notes;
}
}
