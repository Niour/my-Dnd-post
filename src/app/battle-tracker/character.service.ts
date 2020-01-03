import { Injectable } from '@angular/core';
import { Character } from '../shared/character';
import { Spell } from '../buffs/models/spell.model';
import { SpellValue } from '../buffs/models/spellValue.model';
import { Equipment } from '../buffs/models/equipment.model';
import { RandomId } from '../shared/helper';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CharacterService {
    characterChanged = new Subject<Character[]>();
    private characters: Character[] = [
        new Character(
            'Rizzla',
            'Id test 966',
            2,
            100,
            15, 15, 15, 15, 15, 15,
            {spell: [
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
            },
            10, 10, 10, 10, 10, 10,
            0, 0, 0,
            2, 2, 2,
            0, 0, 0,
            'Medium',
            0,
            0,
            0,
            0,
            10,
            10,
            10,
            10,
            100
        )
    ];

    constructor() {}

    setCharacters(charactersInput: Character[]) {
        this.characters = charactersInput;
        this.characterChanged.next(this.getCharacters());
    }

    getCharacters() {
        console.log(this.characters);
        return this.characters.slice();
    }

    createNewCharacter() {
        const newPlayer = new Character(
            'Plz new Name',
            RandomId(),
            2,
            100,
            15, 15, 15, 15, 15, 15,
            {spell: [
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
            },
            10, 10, 10, 10, 10, 10,
            0, 0, 0,
            2, 2, 2,
            0, 0, 0,
            'Medium',
            0,
            0,
            0,
            0,
            10,
            10,
            10,
            10,
            100
        );
        this.characters.push(newPlayer);
        this.characterChanged.next(this.getCharacters());
    }
}
