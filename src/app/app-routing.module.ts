import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuffsComponent } from './buffs/buffs.component';
import { BuffStartComponent } from './buffs/buff-start/buff-start.component';
import { BuffDetailComponent } from './buffs/buff-detail/buff-detail.component';
import { SpellEditComponent } from './buffs/spell-edit/spell-edit.component';
import { EquipmentEditComponent } from './buffs/equipment/equipment-edit/equipment-edit.component';
import { EquipmentDetailComponent } from './buffs/equipment/equipment-detail/equipment-detail.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { BattleTrackerComponent } from './battle-tracker/battle-tracker.component';
import { CharacterStartComponent } from './battle-tracker/character-start/character-start.component';
import { CharacterDetailComponent } from './battle-tracker/character-detail/character-detail.component';


const appRoutes: Routes = [
  {
    path: '', redirectTo: '/buff-list', pathMatch: 'full' },
  {
    path: 'buff-list',
    component: BuffsComponent,
    canActivate: [AuthGuard],
    children: [
    { path: '', component: BuffStartComponent },
    { path: 'spell', redirectTo: '/buff-list', pathMatch: 'full' },
    { path: 'spell/newspell', component: SpellEditComponent},
    { path: 'spell/:id', component: BuffDetailComponent},
    { path: 'spell/:id/edit', component: SpellEditComponent},
    { path: 'equipment', redirectTo: '/buff-list', pathMatch: 'full' },
    { path: 'equipment/newequipment', component: EquipmentEditComponent},
    { path: 'equipment/:id', component: EquipmentDetailComponent},
    { path: ':equipment/:id/edit', component: EquipmentEditComponent},
  ] },
  { path: 'battle-tracker',
  component: BattleTrackerComponent,
  canActivate: [AuthGuard],
  children: [
    { path: '', component: CharacterStartComponent },
    { path: ':id', component: CharacterDetailComponent }
  ]
  },
  { path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
