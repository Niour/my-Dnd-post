import { Component, OnInit, Input } from '@angular/core';
import { Spell } from '../../models/spell.model';

@Component({
  selector: 'app-buff-item-ii',
  templateUrl: './buff-item-ii.component.html',
  styleUrls: ['./buff-item-ii.component.css']
})
export class BuffItemIIComponent implements OnInit {
  @Input() buff: Spell;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
