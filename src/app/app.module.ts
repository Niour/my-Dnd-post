import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AddBuffComponent } from './add-buff/add-buff.component';
import { BuffListComponent } from './buffs/buff-list/buff-list.component';
import { BuffDetailComponent } from './buffs/buff-detail/buff-detail.component';
import { BuffsComponent } from './buffs/buffs.component';
import { BuffItemIIComponent } from './buffs/buff-list/buff-item-ii/buff-item-ii.component';
import { FormsModule } from '@angular/forms';
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
    BuffItemIIComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [BuffService],
  bootstrap: [AppComponent]
})
export class AppModule { }
