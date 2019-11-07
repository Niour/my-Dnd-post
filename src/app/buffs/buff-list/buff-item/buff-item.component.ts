import { Component, OnInit } from '@angular/core';
import { BuffService } from '../../buff.service';

@Component({
  selector: 'app-buff-item',
  templateUrl: './buff-item.component.html',
  styleUrls: ['./buff-item.component.css']
})
export class BuffItemComponent implements OnInit {

  constructor(private buffService: BuffService) { }

  ngOnInit() {
  }

}
