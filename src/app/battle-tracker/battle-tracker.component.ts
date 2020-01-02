import { Component, OnInit } from '@angular/core';
import { CharacterService } from './character.service';
import { Character } from '../shared/character';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-battle-tracker',
  templateUrl: './battle-tracker.component.html',
  styleUrls: ['./battle-tracker.component.css']
})
export class BattleTrackerComponent implements OnInit {
  subscription: Subscription;
  characters: Character[];

  constructor(
    private characterService: CharacterService) { }

  ngOnInit() {
    this.subscription = this.characterService.characterChanged
      .subscribe(
        (dataCharacters: Character[]) => {
          console.log(dataCharacters);
          this.characters = dataCharacters;
        }
      );
    this.characters = this.characterService.getCharacters();
  }
}
