import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { BuffService } from '../buff.service';

@Component({
  selector: 'app-buff-edit',
  templateUrl: './buff-edit.component.html',
  styleUrls: ['./buff-edit.component.css']
})
export class BuffEditComponent implements OnInit {
  buffTypes = ['spell', 'condition', 'Class ab.', 'mode']; // type
  clas = ['Wizard', 'Sorcerer', 'Bard', 'Cleric']; // clas
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

  getControls() {
    return this.buffForm.get('valueBuffs') as FormArray;
  }

  private initForm() {

    let buffName = '';
    let buffDuration = '';
    let bufftype = '';
    let bufflevel: number;
    let buffclas = '';
    let valueBuff = new FormArray([]);

    if (this.editMode) {
      const buff = this.buffService.getBuff(this.id);
      buffName = buff.name;
      buffDuration = buff.duration;
      bufftype = buff.type;
      bufflevel = buff.level;
      buffclas = buff.clas;
      if ( buff.value ) {
        for ( const value of buff.value ) {
          valueBuff.push(
            new FormGroup({
              name: new FormControl(value.name),
              type: new FormControl(value.type)
            })
          );
        }
      }
    }

    this.buffForm = new FormGroup({
      name: new FormControl(buffName),
      duration: new FormControl(buffDuration),
      type: new FormControl(bufftype),
      level: new FormControl(bufflevel),
      clas: new FormControl(buffclas),
      valueBuffs: valueBuff
    });

  }

  onSubmit() {
    console.log(this.buffForm.value);
  }

}
