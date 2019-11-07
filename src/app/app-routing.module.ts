import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuffListComponent } from './buffs/buff-list/buff-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/buffs', pathMatch: 'full'},
  { path: 'buffs', component: BuffListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
