import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { BuffService } from '../buff.service';

@Component({
  selector: 'app-buff-edit',
  templateUrl: './buff-edit.component.html',
  styleUrls: ['./buff-edit.component.css']
})
export class BuffEditComponent implements OnInit {
  buffTypes = ['spell', 'condition', 'armor', 'Class ab.', 'mode', 'size', 'negative Level']; // type
  clas = ['Wizard', 'Sorcerer', 'Bard']; // clas
  buffName = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma',
  'attack', 'damage', 'grapple', 'ac', 'fort', 'ref', 'will'];
  bonusesTypes = ['enchancement', 'racial', 'untyped', 'circumstance', 'alchemicalBonus', 'dodge',
  'armor bonus', 'enhancement armor bonus', 'natural armor bonus', 'enhancement natural armor bonus',
  'shield bonus', 'enhancement shield bonus',
  'competence', 'deflection', 'insight', 'luck', 'morale', 'profane', 'reistance', 'sacred',
  'size', 'epic', 'divine', 'ability drain', 'ability modifier']; // Value.type

  id: number;
  editMode = false;
  buffForm: FormGroup;

  constructor(private buffService: BuffService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params.id;
          this.editMode = params.id != null;
          this.initForm();
        }
      );
  }


  private initForm() {

    let buffName = '';
    let buffState = '';

    if (this.editMode) {
      const buff = this.buffService.getBuff(this.id);
      buffName = buff.name;
      buffState = '';
    }

    this.buffForm = new FormGroup({
      name: new FormControl(buffName),
      test: new FormControl(buffState),
      duration: new FormControl()
    });
  }

  onSubmit() {
    console.log(this.buffForm.value);
  }

}
