import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BuffService } from '../buffs/buff.service';
import { AuthService } from '../auth/auth.service';
import { exhaustMap, take } from 'rxjs/operators';
import { Buffs } from './buffs';

@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient,
                private buffService: BuffService,
                private authService: AuthService) {}

    storeBuffs() {
        this.http.put('https://react-dungeons-and-dragons.firebaseio.com/buffs.json',
        this.buffService.getBuffs())
            .subscribe(
                response => {
                    console.log(response);
                }
            );
    }

    fetchBuffs() {
        return this.http.get<Buffs>('https://react-dungeons-and-dragons.firebaseio.com/buffs.json',
        )
        .subscribe(buffs => {
            this.buffService.setBuffsEquipment(buffs);
            this.buffService.setBuffsSpells(buffs);
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
