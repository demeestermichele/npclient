import {Component, Input, OnInit} from '@angular/core';
import {Character} from "../../core/models/character.model";
import {Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CharacterService} from "../../core/services/character.service";

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];
  subscription: Subscription[] = [];
  error: any;

  @Input()
  character: Character;

  constructor(
    private http: HttpClient,
    private characterService: CharacterService
  ) {
  }

  ngOnInit(): void {
    this.getCharacters();
  }

  getAll() {
    console.log('charactercomponent.getall');
    // return this.characterService.getAllCharacters();
    return this.subscription.push(this.characterService.getAllCharacters().subscribe(characters => this.characters = characters));
  }

  getCharacters():void{
    console.log("this is from character component getCharacters()")
    this.characterService
      .getAllCharacters()
      .subscribe(characters => (this.characters = characters), error => (this.error = error))
  }
}
