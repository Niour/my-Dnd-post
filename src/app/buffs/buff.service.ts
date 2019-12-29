import { Spell } from './models/spell.model';
import { SpellValue } from './models/spellValue.model';
import { RandomId } from '../shared/helper';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Buffs } from '../shared/buffs';
import { Equipment } from './models/equipment.model';

@Injectable()
export class BuffService {
    BuffsChanged = new Subject<Buffs>();
    // buffSelected = new Subject<Buff>();

    private buffs: Buffs = {
        spell: [
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
        equipment: [
            new Equipment(
            'Bulls Strength',
            RandomId(),
            1,
            'equipment',
            [new SpellValue('strength', 'enchantment', 1, 'caster Level', 2),
            new SpellValue('dexterity', 'enchantment', 1, 'caster Level', 2, 1),
            new SpellValue('constitution', 'enchantment', 1, 'caster Level', 2, 1, 3)],
            'This is the Bulls Strenght')]
        };

      constructor(private http: HttpClient) {}

      getTypeBuffs() {
        return new Object(
            {
                spell: this.buffs.spell.slice(),
                equipment: this.buffs.equipment.slice()
            }
        ) as Buffs;
      }

      getBuffs() {
        return this.getTypeBuffs();
      }

      setBuffsSpells(buffs: Buffs) {
          this.buffs.spell = buffs.spell;
          this.BuffsChanged.next(this.getTypeBuffs());
      }

      setBuffsEquipment(buffs: Buffs) {
        this.buffs.equipment = buffs.equipment;
        this.BuffsChanged.next(this.getTypeBuffs());
    }

      getBuffSpell(index: number) {
          return this.buffs.spell[index];
      }

      getBuffEquipment(index: number) {
        return this.buffs.equipment[index];
    }

      addBuffSpell(buff: Spell) {
        this.buffs.spell.push(buff);
        this.BuffsChanged.next(this.getTypeBuffs());
      }

      addBuffEquipment(buff: Equipment) {
        this.buffs.equipment.push(buff);
        this.BuffsChanged.next(this.getTypeBuffs());
      }

      updateBuffSpell(index: number, newBuff: Spell) {
        this.buffs.spell[index] = newBuff;
        this.BuffsChanged.next(this.getTypeBuffs());
      }

      updateBuffEquipment(index: number, newEquip: Equipment) {
        this.buffs.equipment[index] = newEquip;
        this.BuffsChanged.next(this.getTypeBuffs());
      }

      deleteBuffSpell(index: number) {
          this.buffs.spell.splice(index, 1);
          this.BuffsChanged.next(this.getTypeBuffs());
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
                    this.setBuffsEquipment(buffs);
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
