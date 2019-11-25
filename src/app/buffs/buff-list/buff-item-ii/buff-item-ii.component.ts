import { Component, OnInit, Input } from '@angular/core';
import { Buff } from '../../buff.model';
import { BuffService } from '../../buff.service';

@Component({
  selector: 'app-buff-item-ii',
  templateUrl: './buff-item-ii.component.html',
  styleUrls: ['./buff-item-ii.component.css']
})
export class BuffItemIIComponent implements OnInit {
  @Input() buff: Buff;
  constructor(private buffService: BuffService) { }

  ngOnInit() {
  }

  onSelected() {
    this.buffService.buffSelected.emit(this.buff);
  }

}
