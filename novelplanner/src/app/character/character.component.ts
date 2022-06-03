import {Component, Input, OnInit} from '@angular/core';
import {CharacterService} from "../core/services/character.service";
import {Subscription} from 'rxjs';
import {Character} from "../core/models/character.model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
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

  getCharacter(id: number): Character {
    return this.character[id - 1]
  }
}
