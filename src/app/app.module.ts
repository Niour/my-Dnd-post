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
import { ReactiveFormsModule } from '@angular/forms';
import { BuffService } from './buffs/buff.service';
import { AppRoutingModule } from './app-routing.module';
import { BuffStartComponent } from './buffs/buff-start/buff-start.component';
import { BuffEditComponent } from './buffs/buff-edit/buff-edit.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    BuffStartComponent,
    BuffEditComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TypeaheadModule.forRoot()
  ],
  providers: [BuffService],
  bootstrap: [AppComponent]
})
export class AppModule { }
