import { Buff } from './buff.model';
import { BuffValue } from './buffValue.model';
import { RandomId } from '../shared/helper';
// import { Subject } from 'rxjs';

export class BuffService {
    // buffSelected = new Subject<Buff>();

    private buffs = [
        new Buff(
            'Bulls Strength',
            RandomId(),
            'min/level',
            'spell',
            2,
            'Wizard',
            [new BuffValue('strenght', 'enchatment', 1, 'caster Level', 2),
            new BuffValue('dexterity', 'enchatment', 1, 'caster Level', 2, 1),
            new BuffValue('constitution', 'enchatment', 1, 'caster Level', 2, 1, 3)],
            'This is the Bulls Strenght'),
        new Buff(
            'Cats Grace',
            RandomId(),
            'min/level',
            'spell',
            2,
            'Wizard',
            [new BuffValue('dexterity', 'enchatment', 1, 'caster Level', 2, 2, 2)],
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


}
