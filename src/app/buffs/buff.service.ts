import { Buff } from './buff.model';
import { BuffValue } from './buffValue.model';
import { RandomId } from '../shared/helper';
import { Subject } from 'rxjs';
// import { Subject } from 'rxjs';

export class BuffService {
    buffsChanged = new Subject<Buff[]>();
    // buffSelected = new Subject<Buff>();

    private buffs = [
        new Buff(
            'Bulls Strength',
            RandomId(),
            'min/level',
            'spell',
            2,
            'Wizard',
            [new BuffValue('strength', 'enchantment', 1, 'caster Level', 2),
            new BuffValue('dexterity', 'enchantment', 1, 'caster Level', 2, 1),
            new BuffValue('constitution', 'enchantment', 1, 'caster Level', 2, 1, 3)],
            'This is the Bulls Strenght'),
        new Buff(
            'Cats Grace',
            RandomId(),
            'min/level',
            'spell',
            2,
            'Wizard',
            [new BuffValue('dexterity', 'enchantment', 1, 'caster Level', 2, 2, 2)],
            'Test'
            )
            ];

      constructor() {}

      getBuffs() {
          return this.buffs.slice();
      }

      getBuff(index: number) {
          return this.buffs[index];
      }

      addBuff(buff: Buff) {
        this.buffs.push(buff);
        this.buffsChanged.next(this.buffs.slice());
      }

      updateBuff(index: number, newBuff: Buff) {
        this.buffs[index] = newBuff;
        this.buffsChanged.next(this.buffs.slice());
      }

      deleteBuff(index: number) {
          this.buffs.splice(index, 1);
          this.buffsChanged.next(this.buffs.slice());
      }

}
