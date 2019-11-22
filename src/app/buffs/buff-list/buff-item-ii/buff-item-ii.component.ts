import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Buff } from '../../buff.model';

@Component({
  selector: 'app-buff-item-ii',
  templateUrl: './buff-item-ii.component.html',
  styleUrls: ['./buff-item-ii.component.css']
})
export class BuffItemIIComponent implements OnInit {
  @Input() buff: Buff;
  @Output() buffSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.buffSelected.emit();
  }

}
