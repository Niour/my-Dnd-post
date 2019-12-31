import { Component, OnInit, OnDestroy } from '@angular/core';
import { BuffService } from '../buffs/buff.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;
  collapsed = true;

  constructor(private buffService: BuffService,
              private authService: AuthService) { }

  ngOnInit() {
    this. userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
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

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}
