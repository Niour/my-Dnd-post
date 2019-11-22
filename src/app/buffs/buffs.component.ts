import { Component, OnInit } from '@angular/core';
import { Buff } from './buff.model';

@Component({
  selector: 'app-buffs',
  templateUrl: './buffs.component.html',
  styleUrls: ['./buffs.component.css']
})
export class BuffsComponent implements OnInit {
  selectedBuff: Buff;

  constructor() { }

  ngOnInit() {
  }

}
