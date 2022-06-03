import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CharacterComponent} from "./character/character.component";
import {CharacterListComponent} from "./character/character-list/character-list.component";
import {DashboardComponent} from "./dashboards/dashboard/dashboard.component";


const routes: Routes = [
  {path: '', component: DashboardComponent },
  {path: 'character-list', component: CharacterListComponent },
  {path: 'character', component: CharacterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
