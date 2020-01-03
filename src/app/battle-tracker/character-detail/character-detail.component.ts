import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CharacterService } from '../character.service';
import { Character } from 'src/app/shared/character';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  id: number;
  character: Character;

  constructor(
              private characterService: CharacterService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params.id;
          console.log(this.id);
          this.character = this.characterService.getCharacters()[this.id];
        }
      );
  }
}
