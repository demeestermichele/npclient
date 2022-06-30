import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CharacterComponent} from "./character/character.component";
import {CharacterListComponent} from "./character/character-list/character-list.component";
import {DashboardComponent} from "./dashboards/dashboard/dashboard.component";
import {CharacterDetailComponent} from "./character/character-detail/character-detail.component";


const routes: Routes = [
  {path: '', component: DashboardComponent },
  {path: 'characters/detail', component: CharacterDetailComponent },
  {path: 'characters/list', component: CharacterListComponent },
  {path: 'characters', component: CharacterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
