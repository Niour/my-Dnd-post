import { BuffValue } from './buffValue.model';

export class Buff {
    public name: string;
    public id: number;
    public duration: string;
    public type: string;
    public level: number;
    public clas: string;
    public value: BuffValue[];

    constructor(name: string,
                id: number,
                duration: string,
                type: string,
                level: number,
                clas: string,
                value: BuffValue[]) {
            this.name = name;
            this.id = id;
            this.duration = duration;
            this.type = type;
            this.level = level;
            this.clas = clas;
            this.value = value;
}
