import { Component, OnInit } from '@angular/core';
import { Buff } from '../buff.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BuffService } from '../buff.service';

@Component({
  selector: 'app-buff-detail',
  templateUrl: './buff-detail.component.html',
  styleUrls: ['./buff-detail.component.css']
})
export class BuffDetailComponent implements OnInit {
  buff: Buff;
  id: number;
  constructor(private buffService: BuffService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params.id;
          this.buff = this.buffService.getBuff(this.id);
        }
      );
  }

  onEditBuff() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
