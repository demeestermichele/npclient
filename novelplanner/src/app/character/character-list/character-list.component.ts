import {Component, Input, OnInit} from '@angular/core';
import {Character} from "../../core/models/character.model";
import {Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CharacterService} from "../../core/services/character.service";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];
  subscription: Subscription[] = [];
  currentCharacter: Character;
  error: any;
  id: number = +this.route.snapshot.paramMap.get('id');

  @Input()
  character: Character;

  constructor(
    private http: HttpClient,
    private characterService: CharacterService,
    private route: ActivatedRoute,
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

  getCharacters(): void {
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
  onSelect(character: Character): void {
    this.currentCharacter = character;
  }
ngOnDestroy():void{
    console.log('this is the charlist comp on destroy');
}
}
