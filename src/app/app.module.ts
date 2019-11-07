import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AddBuffComponent } from './add-buff/add-buff.component';
import { BuffListComponent } from './buffs/buff-list/buff-list.component';
import { BuffDetailComponent } from './buffs/buff-list/buff-detail/buff-detail.component';
import { BuffsComponent } from './buffs/buffs.component';
import { BuffItemComponent } from './buffs/buff-list/buff-item/buff-item.component';
import { BuffService } from './buffs/buff.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    AddBuffComponent,
    BuffListComponent,
    BuffDetailComponent,
    BuffsComponent,
    BuffItemComponent,
    BuffService
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
