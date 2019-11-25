import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Buff } from '../buff.model';
import { BuffService } from '../buff.service';

@Component({
  selector: 'app-buff-listt',
  templateUrl: './buff-list.component.html',
  styleUrls: ['./buff-list.component.css']
})
export class BuffListComponent implements OnInit {
  buffs: Buff[];

  constructor(private buffService: BuffService) { }

  ngOnInit() {
    this.buffs = this.buffService.getBuffs();
  }

}
