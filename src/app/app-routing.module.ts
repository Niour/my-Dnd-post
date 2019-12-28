import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuffsComponent } from './buffs/buffs.component';
import { AddBuffComponent } from './add-buff/add-buff.component';
import { BuffStartComponent } from './buffs/buff-start/buff-start.component';
import { BuffDetailComponent } from './buffs/buff-detail/buff-detail.component';
import { SpellEditComponent } from './buffs/spell-edit/spell-edit.component';
import { EquipmentEditComponent } from './buffs/equipment-edit/equipment-edit.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/buff-list', pathMatch: 'full' },
  { path: 'buff-list', component: BuffsComponent, children: [
    {path: '', component: BuffStartComponent },
    { path: 'spell', redirectTo: '/buff-list', pathMatch: 'full' },
    { path: 'spell/newspell', component: SpellEditComponent},
    { path: 'spell/:id', component: BuffDetailComponent},
    { path: 'spell/:id/edit', component: SpellEditComponent},
    { path: 'equipment', redirectTo: '/buff-list', pathMatch: 'full' },
    { path: 'equipment/newequipment', component: EquipmentEditComponent},
    { path: 'equipment/:id', component: BuffDetailComponent},
    { path: ':equipment/:id/edit', component: EquipmentEditComponent},
  ] },
  { path: 'add-buff', component: AddBuffComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
