import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuffsComponent } from './buffs/buffs.component';


const routes: Routes = [
  { path: '', redirectTo: '/test', pathMatch: 'full'},
  { path: 'test', component: BuffsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
