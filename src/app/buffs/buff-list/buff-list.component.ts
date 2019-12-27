import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Spell } from '../models/spell.model';
import { BuffService } from '../buff.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Equipment } from '../models/equipment.model';

@Component({
  selector: 'app-buff-listt',
  templateUrl: './buff-list.component.html',
  styleUrls: ['./buff-list.component.css']
})
export class BuffListComponent implements OnInit, OnDestroy {
  selected = '';
  buffTypes = ['spell', 'condition', 'Class ab.', 'mode', 'all'];
  buffs: Spell[] | Equipment[];
  subscription: Subscription;
  filteredType: string;

  constructor(private buffService: BuffService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.buffService.SpellsChanged
    .subscribe(
      (buffs: Spell[]) => {
        this.buffs = buffs;
      }
    );
    this.buffs = this.buffService.getBuffsSpells();
  }

  onNewBuff(selected) {
    this.router.navigate(['newSpell'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  filterType(item: string) {
    this.selected = item; // this has to can be iplemented with a directive
  }

  getindex(id: string) {
    let elementIndex = 0;
    elementIndex = this.buffs.findIndex(element => {
      return id === element.id;
      });
    return elementIndex;

  }
}
