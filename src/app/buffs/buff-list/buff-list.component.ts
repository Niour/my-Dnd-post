import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Buff } from '../buff.model';
import { BuffService } from '../buff.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-buff-listt',
  templateUrl: './buff-list.component.html',
  styleUrls: ['./buff-list.component.css']
})
export class BuffListComponent implements OnInit, OnDestroy {
  buffs: Buff[];
  subscription: Subscription;

  constructor(private buffService: BuffService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.buffService.buffsChanged
    .subscribe(
      (buffs: Buff[]) => {
        this.buffs = buffs;
      }
    );
    this.buffs = this.buffService.getBuffs();
  }

  onNewBuff() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
