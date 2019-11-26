export class BuffValue {
    public name: string;
    public type: string;
    public after: number;
    public special: string;
    public value: number[];

    constructor(name: string,
                type: string,
                after: number,
                special: string,
                value: number[]) {
                    this.name = name;
                    this.type = type;
                    this.after = after;
                    this.special = special;
                    this.value = value;
    }
}
