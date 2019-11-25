import { Buff } from './buff.model';
import { BuffValue } from './buffValue.model';
import { RandomId } from '../shared/helper';
import { EventEmitter } from '@angular/core';

export class BuffService {
    buffSelected = new EventEmitter<Buff>();

    private buffs = [
        new Buff(
            'Bulls Strength',
            RandomId(),
            'min/level',
            'spell',
            2,
            'Wizard',
            [new BuffValue('strenght', 'enchatment', 1, 'null', () => 2)]),
        new Buff(
            'Cats Grace',
            RandomId(),
            'min/level',
            'spell',
            2,
            'Wizard',
            [new BuffValue('dexterity', 'enchatment', 1, 'null', () => 2)])
      ];

      constructor() {}

      getBuffs() {
          return this.buffs.slice();
      }


}
