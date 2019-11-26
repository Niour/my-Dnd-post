import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuffsComponent } from './buffs/buffs.component';
import { AddBuffComponent } from './add-buff/add-buff.component';
import { BuffStartComponent } from './buffs/buff-start/buff-start.component';
import { BuffDetailComponent } from './buffs/buff-detail/buff-detail.component';
import { BuffEditComponent } from './buffs/buff-edit/buff-edit.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/buff-list', pathMatch: 'full' },
  { path: 'buff-list', component: BuffsComponent, children: [ //  Einai ligo lathois to onoma, eprepe na einai buff
    {path: '', component: BuffStartComponent },
    { path: 'new', component: BuffEditComponent},
    { path: ':id', component: BuffDetailComponent},
    { path: ':id/edit', component: BuffEditComponent},
  ] },
  { path: 'add-buff', component: AddBuffComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
