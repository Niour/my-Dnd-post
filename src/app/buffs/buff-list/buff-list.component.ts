import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Buff } from '../buff.model';
import { RandomId } from '../../shared/helper';
import { BuffValue } from '../buffValue.model';

@Component({
  selector: 'app-buff-listt',
  templateUrl: './buff-list.component.html',
  styleUrls: ['./buff-list.component.css']
})
export class BuffListComponent implements OnInit {
  @Output() buffWasSelected = new EventEmitter<Buff>();

  buffs = [new Buff(
    'Bulls Strength',
    RandomId(),
    'min/level',
    'spell',
    2,
    'Wizard',
    [new BuffValue('strenght', 'enchatment', 1, 'null', () => 2)]),
    new Buff(
    'Cats Grace',
    RandomId(),
    'min/level',
    'spell',
    2,
    'Wizard',
    [new BuffValue('dexterity', 'enchatment', 1, 'null', () => 2)])
  ];
  constructor() { }

  ngOnInit() {
  }

  onBuffSelected(buff: Buff) {
    this.buffWasSelected.emit(buff);
  }

}
