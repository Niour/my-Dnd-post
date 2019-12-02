import { Component, OnInit } from '@angular/core';
import { BuffService } from '../buffs/buff.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  constructor(private buffService: BuffService) { }

  ngOnInit() {
  }

  onSaveData() {
    this.buffService.storeBuffs();
  }

  onFetchData() {
    this.buffService.fetchBuffs();
  }

  onBackupData() {
    this.buffService.backup();
  }

}
