import { Component, OnInit } from '@angular/core';
import { Buff } from './buff.model';
import { BuffService } from './buff.service';

@Component({
  selector: 'app-buffs',
  templateUrl: './buffs.component.html',
  styleUrls: ['./buffs.component.css'],
  providers: []
})
export class BuffsComponent implements OnInit {
  selectedBuff: Buff;

  constructor(private buffService: BuffService) { }

  ngOnInit() {
    this.buffService.buffSelected
      .subscribe(
        (buff: Buff) => {
          this.selectedBuff = buff;
        }
      );
  }

}
