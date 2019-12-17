import { Buff } from './buff.model';
import { BuffValue } from './buffValue.model';
import { RandomId } from '../shared/helper';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs';

@Injectable()
export class BuffService {
    buffsChanged = new Subject<Buff[]>();
    // buffSelected = new Subject<Buff>();
    // private buffs = [];
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
        'This is the Bulls Strenght')];
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

      getBuffs() {
          return this.buffs.slice();
      }

      setBuffs(buffs: Buff[]) {
          this.buffs = buffs;
          this.buffsChanged.next(this.buffs.slice());
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
        this.http.get<Buff[]>('https://react-dungeons-and-dragons.firebaseio.com/buffs.json')
            .subscribe(
                buffs => {
                    this.setBuffs(buffs);
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
