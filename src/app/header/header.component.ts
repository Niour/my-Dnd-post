import { Component, OnInit, OnDestroy } from '@angular/core';
import { BuffService } from '../buffs/buff.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { DataStorageService } from '../shared/data.service';

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
              private authService: AuthService,
              private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this. userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  onLogout() {
    this.authService.logout();
  }

  onSaveData() {
    this.dataStorageService.storeBuffs();
  }

  onFetchData() {
    this.dataStorageService.fetchBuffs();
  }

  onBackupData() {
    this.dataStorageService.backup();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}
