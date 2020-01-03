import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BuffService } from '../buffs/buff.service';
import { Buffs } from './buffs';
import { Data } from '@angular/router';
import { CharacterService } from '../battle-tracker/character.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient,
                private buffService: BuffService,
                private characterService: CharacterService) {}

    storeBuffs() {
        const data = {
            buffs: this.buffService.getBuffs(),
            characters: this.characterService.getCharacters()
        };
        this.http.put('https://react-dungeons-and-dragons.firebaseio.com/data.json',
        data)
            .subscribe(
                response => {
                    console.log(response);
                }
            );
    }

    fetchBuffs() {
        return this.http.get<Data>('https://react-dungeons-and-dragons.firebaseio.com/data.json',
        )
        .subscribe(data => {
            this.buffService.setBuffsEquipment(data.buffs);
            this.buffService.setBuffsSpells(data.buffs);
            this.characterService.setCharacters(data.characters);
        });
    }

    backup() {
        this.http.put('https://react-dungeons-and-dragons.firebaseio.com/buffsBack.json',
        this.buffService.getBuffs())
            .subscribe(
                response => {
                    console.log(response);
                }
            );
    }
}
