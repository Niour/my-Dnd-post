export class BuffValue {
    public name: string;
    public type: string;
    public after: number;
    public special: string;
    public value1: number;
    public value2: number;
    public value3: number;

    constructor(name: string,
                type: string,
                after: number,
                special: string,
                value1: number,
                value2?: number,
                value3?: number) {
                    this.name = name;
                    this.type = type;
                    this.after = after;
                    this.special = special;
                    this.value1 = value1;
                    this.value2 = value2;
                    this.value3 = value3;
    }
}
