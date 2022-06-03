import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CharacterComponent} from "./character/character.component";


const routes: Routes = [
  {path: 'character-list', component: CharacterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
