import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormControl, FormGroup, FormArray, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { BuffService } from '../buff.service';
import { Buff } from '../buff.model';
import { RandomId } from 'src/app/shared/helper';

@Component({
  selector: 'app-buff-edit',
  templateUrl: './buff-edit.component.html',
  styleUrls: ['./buff-edit.component.css']
})
export class BuffEditComponent implements OnInit {
  buffTypes = ['spell', 'condition', 'Class ab.', 'mode']; // type
  clas = ['Wizard', 'Sorcerer', 'Bard', 'Cleric']; // clas
  buffName = ['caster Level', 'strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma',
  'attack', 'damage', 'grapple', 'ac', 'fort', 'ref', 'will'];
  bonusesTypes = ['enchantment', 'racial', 'untyped', 'circumstance', 'alchemicalBonus', 'dodge',
  'armor bonus', 'enchantment armor bonus', 'natural armor bonus', 'enhancement natural armor bonus',
  'shield bonus', 'enhancement shield bonus',
  'competence', 'deflection', 'insight', 'luck', 'morale', 'profane', 'reistance', 'sacred',
  'size', 'epic', 'divine', 'ability drain', 'ability modifier']; // Value.type

  id: number;
  editMode = false;
  buffForm: FormGroup;

  constructor(private buffService: BuffService,
              private route: ActivatedRoute,
              private router: Router) { }

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

  // getControlsSpecial(special: string) {
  //   console.log(this.buffForm.get(special) as FormControl);
  //   return (this.buffForm.get(special) as FormControl).value;
  // } in case we need this more general

  getControls() {
    return this.buffForm.get('valueBuffs') as FormArray;
  }

  arrayValidator(nameRe: string[]): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = nameRe.includes(control.value);
      return !forbidden ? {forbiddenName: {value: control.value}} : null;
    };
  }

  onCancel() {
    console.log('inside onCancel');
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {

    let buffName = '';
    let buffDuration = '';
    let bufftype = '';
    let bufflevel: number;
    let buffclas = '';
    const valueBuff = new FormArray([]);
    let buffnotes = '';

    if (this.editMode) {
      const buff = this.buffService.getBuff(this.id);
      buffName = buff.name;
      buffDuration = buff.duration;
      bufftype = buff.type;
      bufflevel = buff.level;
      buffclas = buff.clas;
      buffnotes = buff.notes;
      if ( buff.value ) {
        for ( const value of buff.value ) {
          valueBuff.push(
            new FormGroup({
              name: new FormControl(value.name, [Validators.required, this.arrayValidator(this.buffName)]),
              type: new FormControl(value.type, [Validators.required, this.arrayValidator(this.bonusesTypes)]),
              value1: new FormControl(value.value1, Validators.required),
              value2: new FormControl(value.value2),
              value3: new FormControl(value.value3),
              special: new FormControl(value.special, Validators.required)
            })
          );
        }
      }
    }

    this.buffForm = new FormGroup({
      name: new FormControl(buffName, Validators.required),
      duration: new FormControl(buffDuration, Validators.required),
      type: new FormControl(bufftype, [Validators.required , this.arrayValidator(this.buffTypes)]),
      level: new FormControl(bufflevel, [
        Validators.required,
        Validators.pattern(/^[0-9]+[0-9]*$/)
      ]),
      clas: new FormControl(buffclas, [Validators.required, this.arrayValidator(this.clas)]),
      notes: new FormControl(buffnotes),
      valueBuffs: valueBuff
    });

  }

  onSubmit() {
    console.log(this.buffForm.value);
    let newId;
    if (this.editMode) {
      newId = this.buffService.getBuff(this.id).id;
    } else {
      newId = RandomId();
    }
    const newBuff = new Buff(
      this.buffForm.value.name,
      newId,
      this.buffForm.value.duration,
      this.buffForm.value.type,
      this.buffForm.value.level,
      this.buffForm.value.clas,
      this.buffForm.value.valueBuffs,
      this.buffForm.value.notes
    );
    if (this.editMode) {
      this.buffService.updateBuff(this.id, newBuff);
    } else {
      this.buffService.addBuff(newBuff);
    }
    this.onCancel();
  }

  onAddValue() {
    (this.buffForm.get('valueBuffs') as FormArray).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        type: new FormControl(null, Validators.required),
        value1: new FormControl(null, Validators.required),
        value2: new FormControl(),
        value3: new FormControl(),
        special: new FormControl(null, Validators.required)
    })
    );
  }

  onDeleteValue(index: number) {
    (this.buffForm.get('valueBuffs') as FormArray).removeAt(index);
  }

}
