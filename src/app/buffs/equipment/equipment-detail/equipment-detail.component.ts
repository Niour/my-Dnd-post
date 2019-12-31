import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, } from '@angular/router';
import { BuffService } from '../../buff.service';
import { Equipment } from '../../models/equipment.model';

@Component({
  selector: 'app-equipment-detail',
  templateUrl: './equipment-detail.component.html',
  styleUrls: ['./equipment-detail.component.css']
})
export class EquipmentDetailComponent implements OnInit {
  buff: Equipment;
  id: number;
  constructor(private buffService: BuffService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params.id;
          this.buff = this.buffService.getBuffEquipment(this.id);
        }
      );
  }

  onEditBuff() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteBuff() {
    this.buffService.deleteBuffEquipment(this.id);
    this.router.navigate(['buff-list']);
  }

}
