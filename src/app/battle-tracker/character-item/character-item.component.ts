import { Component, OnInit, Input } from '@angular/core';
import { Character } from 'src/app/shared/character';
import { CharacterService } from '../character.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-item',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.css']
})
export class CharacterItemComponent implements OnInit {
  @Input() character: Character;
  @Input() index: number;
  initiative: number;
  hitpoints: number;
  timeOut: any;

  constructor(
              private characterService: CharacterService,
              private route: ActivatedRoute,
              private router: Router
  ) { }

  ngOnInit() {
  }

  onUpdateHitpoints(eventNumber: number) {
    clearTimeout(this.timeOut);
    this.timeOut = setTimeout(
      () => {
        this.character.hitpoints = eventNumber;
        this.characterService.updateCharacter(this.index, this.character);
      }
    , 500);
  }

  onUpdateInitiative(eventNumber: number) {
    clearTimeout(this.timeOut);
    this.timeOut = setTimeout(
      () => {
        this.character.initiative = eventNumber;
        this.characterService.updateInitiative(this.index, this.character);
      }
    , 500);
  }

  onRemove() {
    this.characterService.deleteCharacter(this.index);
    this.router.navigate(['battle-tracker']);
  }

  onEdit() {
    this.router.navigate([`${this.index}/edit`], { relativeTo: this.route});
  }
}
