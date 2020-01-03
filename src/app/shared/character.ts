import { Buffs } from './buffs';

export class Character {
    public name: string;
    public id: string;
    public initiative: number;
    public hitpoints: number;
    public strength: number;
    public dexterity: number;
    public constitution: number;
    public intelligence: number;
    public wisdom: number;
    public charisma: number;
    public buffs: Buffs;
    public baseStrength: number;
    public baseDexterity: number;
    public baseConstitution: number;
    public baseIntelligence: number;
    public baseWisdom: number;
    public baseCharisma: number;
    public fort: number;
    public ref: number;
    public will: number;
    public baseFort: number;
    public baseRef: number;
    public baseWill: number;
    public attackRoll: number;
    public bab: number;
    public baseAttackBab: number;
    public size: string;
    public negativeLevels: number;
    public damage: number;
    public grapple: number;
    public ac: number;
    public baseAc: number;
    public touchAc: number;
    public flatfoodedAc: number;
    public maxDex: number;
    public hitpointsMax: number;

    constructor(
        name: string,
        id: string,
        initiative: number,
        hitpoints: number,
        strength: number,
        dexterity: number,
        constitution: number,
        intelligence: number,
        wisdom: number,
        charisma: number,
        buffs: Buffs,
        baseStrength: number,
        baseDexterity: number,
        baseConstitution: number,
        baseIntelligence: number,
        baseWisdom: number,
        baseCharisma: number,
        fort: number,
        ref: number,
        will: number,
        baseFort: number,
        baseRef: number,
        baseWill: number,
        attackRoll: number,
        bab: number,
        baseAttackBab: number,
        size: string,
        negativeLevels: number,
        damage: number,
        grapple: number,
        ac: number,
        baseAc: number,
        touchAc: number,
        flatfoodedAc: number,
        maxDex: number,
        hitpointsMax: number
    ) {
        this.name = name;
        this.id = id;
        this.initiative = initiative;
        this.hitpoints = hitpoints;
        this.strength = strength;
        this.dexterity = dexterity;
        this.constitution = constitution;
        this.intelligence = intelligence;
        this.wisdom = wisdom;
        this.charisma = charisma;
        this.buffs = buffs;
        this.baseStrength = baseStrength;
        this.baseDexterity = baseDexterity;
        this.baseConstitution = baseConstitution;
        this.baseIntelligence = baseIntelligence;
        this.baseWisdom = baseWisdom;
        this.baseCharisma = baseCharisma;
        this.fort = fort;
        this.ref = ref;
        this.will = will;
        this.baseFort = baseFort;
        this.baseRef = baseRef;
        this.baseWill = baseWill;
        this.attackRoll = attackRoll;
        this.bab = bab;
        this.baseAttackBab = baseAttackBab;
        this.size = size;
        this.negativeLevels = negativeLevels;
        this.damage = damage;
        this.grapple = grapple;
        this.ac = ac;
        this.baseAc = baseAc;
        this.touchAc = touchAc;
        this.flatfoodedAc = flatfoodedAc;
        this.maxDex = maxDex;
        this.hitpointsMax = hitpointsMax;
    }
}
