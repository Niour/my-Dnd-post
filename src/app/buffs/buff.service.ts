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
            [new BuffValue('strenght', 'enchatment', 1, 'null', [2])]),
        new Buff(
            'Bulls Strength',
            RandomId(),
            'min/level',
            'spell',
            2,
            'Wizard',
            [new BuffValue('strenght', 'enchatment', 1, 'null', [2])]
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
