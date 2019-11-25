import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Buff } from '../buff.model';
import { BuffService } from '../buff.service';
import { Router, ActivatedRoute } from '@angular/router';
import { relative } from 'path';

@Component({
  selector: 'app-buff-listt',
  templateUrl: './buff-list.component.html',
  styleUrls: ['./buff-list.component.css']
})
export class BuffListComponent implements OnInit {
  buffs: Buff[];

  constructor(private buffService: BuffService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.buffs = this.buffService.getBuffs();
  }

  onNewBuff() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
