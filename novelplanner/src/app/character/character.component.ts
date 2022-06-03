import {Component, Input, OnInit} from '@angular/core';
import {CharacterService} from "../core/services/character.service";
import {Subscription} from 'rxjs';
import {Character} from "../core/models/character.model";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  characters: Character[] = [];
  subscription: Subscription[] = [];
  error: any;
  id: number = +this.route.snapshot.paramMap.get('id');

  @Input()
  character: Character;

  constructor(
    private http: HttpClient,
    private characterService: CharacterService,
  private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.getCharacters();
    this.getOne();
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
  getOne() {
    console.log('get one character');
    return this.subscription.push(
      this.characterService
        .getCharacterById(this.id)
        .subscribe(character => this.character = character));

  }
}
