import { Spell } from './models/spell.model';
import { SpellValue } from './models/spellValue.model';
import { RandomId } from '../shared/helper';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Buffs } from '../shared/buffs';

@Injectable()
export class BuffService {
    buffsChanged = new Subject<Spell[]>();
    // buffSelected = new Subject<Buff>();
    // private buffs = [];

    private buffs: Buffs = {
        spells: [
            new Spell(
            'Bulls Strength',
            RandomId(),
            'min/level',
            'spell',
            2,
            'Wizard',
            [new SpellValue('strength', 'enchantment', 1, 'caster Level', 2),
            new SpellValue('dexterity', 'enchantment', 1, 'caster Level', 2, 1),
            new SpellValue('constitution', 'enchantment', 1, 'caster Level', 2, 1, 3)],
            'This is the Bulls Strenght')],
            test: 'test'
        };
        // new Buff(
        //     'Bulls Strength',
        //     RandomId(),
        //     'min/level',
        //     'spell',
        //     2,
        //     'Wizard',
        //     [new BuffValue('strength', 'enchantment', 1, 'caster Level', 2),
        //     new BuffValue('dexterity', 'enchantment', 1, 'caster Level', 2, 1),
        //     new BuffValue('constitution', 'enchantment', 1, 'caster Level', 2, 1, 3)],
        //     'This is the Bulls Strenght'),
        // new Buff(
        //     'Cats Grace',
        //     RandomId(),
        //     'min/level',
        //     'spell',
        //     2,
        //     'Wizard',
        //     [new BuffValue('dexterity', 'enchantment', 1, 'caster Level', 2, 2, 2)],
        //     'Test'
        //     ),
        //     new Buff(
        //         'Test one',
        //         RandomId(),
        //         'min/level',
        //         'condition',
        //         2,
        //         'Wizard',
        //         [new BuffValue('dexterity', 'enchantment', 1, 'caster Level', 2, 2, 2)],
        //         'Test'
        //         ),
        //         new Buff(
        //             'Test two',
        //             RandomId(),
        //             'min/level',
        //             'spell',
        //             2,
        //             'Wizard',
        //             [new BuffValue('dexterity', 'enchantment', 1, 'caster Level', 2, 2, 2)],
        //             'Test'
        //             )
        //     ];

      constructor(private http: HttpClient) {}

      getBuffsSpells() {
          return this.buffs.spells.slice();
      }

      setBuffsSpells(buffs: Buffs) {
          this.buffs.spells = buffs.spells;
          this.buffsChanged.next(this.buffs.spells.slice());
      }

      getBuffSpell(index: number) {
          return this.buffs.spells[index];
      }

      addBuffSpell(buff: Spell) {
        this.buffs.spells.push(buff);
        this.buffsChanged.next(this.buffs.spells.slice());
      }

      updateBuffSpell(index: number, newBuff: Spell) {
        this.buffs.spells[index] = newBuff;
        this.buffsChanged.next(this.buffs.spells.slice());
      }

      deleteBuffSpell(index: number) {
          this.buffs.spells.splice(index, 1);
          this.buffsChanged.next(this.buffs.spells.slice());
      }

      storeBuffs() {
        this.http.put('https://react-dungeons-and-dragons.firebaseio.com/buffs.json',
        this.buffs)
          .subscribe(
              (response => {
                  console.log(response);
              })
          );
    }

    fetchBuffs() {
        this.http.get<Buffs>('https://react-dungeons-and-dragons.firebaseio.com/buffs.json')
            .subscribe(
                buffs => {
                    this.setBuffsSpells(buffs);
                }
            );
    }

    backup() {
        this.http.post('https://react-dungeons-and-dragons.firebaseio.com/buffsBack.json',
        this.buffs)
          .subscribe(
              (response => {
                  console.log(response);
              })
          );
    }

}
