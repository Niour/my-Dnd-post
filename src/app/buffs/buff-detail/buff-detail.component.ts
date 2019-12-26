import { Component, OnInit } from '@angular/core';
import { Spell } from '../models/spell.model';
import { ActivatedRoute, Params, Router, ActivatedRouteSnapshot } from '@angular/router';
import { BuffService } from '../buff.service';

@Component({
  selector: 'app-buff-detail',
  templateUrl: './buff-detail.component.html',
  styleUrls: ['./buff-detail.component.css']
})
export class BuffDetailComponent implements OnInit {
  buff: Spell;
  id: number;
  constructor(private buffService: BuffService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params.id;
          this.buff = this.buffService.getBuffSpell(this.id);
        }
      );
  }

  onEditBuff() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteBuff() {
    this.buffService.deleteBuffSpell(this.id);
    this.router.navigate(['buff-list']);
  }

}
