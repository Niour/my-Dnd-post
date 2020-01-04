import { Component, OnInit, OnDestroy } from '@angular/core';
import { CharacterService } from './character.service';
import { Character } from '../shared/character';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-battle-tracker',
  templateUrl: './battle-tracker.component.html',
  styleUrls: ['./battle-tracker.component.css']
})
export class BattleTrackerComponent implements OnInit, OnDestroy {
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

  onNewChatacter() {
    this.characterService.createNewCharacter();
  }

  getIndex(character: Character) {
    let elementIndex = 0;
    elementIndex = this.characters.findIndex(element => {
      return character.id === element.id;
      });
    return elementIndex;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
