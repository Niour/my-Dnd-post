import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Spell } from '../models/spell.model';
import { BuffService } from '../buff.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Equipment } from '../models/equipment.model';
import { Buffs } from 'src/app/shared/buffs';

@Component({
  selector: 'app-buff-listt',
  templateUrl: './buff-list.component.html',
  styleUrls: ['./buff-list.component.css']
})
export class BuffListComponent implements OnInit, OnDestroy {
  selected = 'spell';
  buffTypes = ['spell', 'equipment'];
  buffs: Buffs;
  subscription: Subscription;
  filteredType: string;

  constructor(private buffService: BuffService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.buffService.BuffsChanged
    .subscribe(
      (buffs: Buffs) => {
        this.buffs = buffs;
        console.log(this.buffs);
      }
    );
    this.buffs = this.buffService.getBuffs();
  }

  onNewBuff() {
    this.router.navigate([`${this.selected}/new${this.selected}`], {relativeTo: this.route});
  }

  onSwitchType() {
    this.router.navigate([''], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  filterType(item: string) {
    this.selected = item; // this has to can be iplemented with a directive
  }

  getindex(id: string) {
    let elementIndex = 0;
    elementIndex = this.buffs[this.selected].findIndex(element => {
      return id === element.id;
      });
    return elementIndex;

  }
}
