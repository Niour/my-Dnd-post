import { Component, OnInit, Input } from '@angular/core';
import { Buff } from '../../buff.model';

@Component({
  selector: 'app-buff-item-ii',
  templateUrl: './buff-item-ii.component.html',
  styleUrls: ['./buff-item-ii.component.css']
})
export class BuffItemIIComponent implements OnInit {
  @Input() buff: Buff;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
