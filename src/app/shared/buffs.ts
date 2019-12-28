import { Spell } from '../buffs/models/spell.model';
import { Equipment } from '../buffs/models/equipment.model';

export interface Buffs {
    spell: Spell[];
    equipment: Equipment[];
}
