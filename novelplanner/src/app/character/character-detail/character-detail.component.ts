import {Component, Input, OnInit} from '@angular/core';
import {Character} from "../../core/models/character.model";
import {Observable, Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CharacterService} from "../../core/services/character.service";
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  characters: Character[] = [];
  children: Character[] = [];
  subscription: Subscription[] = [];
  error: any;
  id: number = +this.route.snapshot.paramMap.get('id');


  @Input()
  character: Character;

  constructor(
    private http: HttpClient,
    private characterService: CharacterService,
    private route: ActivatedRoute,
    private backlocation: Location
  ) {}

  ngOnInit(): void {
  /* this.getAll();
    this.getOne();*/
    this.currentCharacter();
  }

  getAll() {
    console.log('charactercomponent.getall');
    // return this.characterService.getAllCharacters();
    return this.subscription.push(this.characterService.getAllCharacters().subscribe(characters => this.characters = characters));
  }

  getOne() {
    console.log('get one character');
    return this.subscription.push(
      this.characterService
        .getCharacterById(this.id)
        .subscribe(character => this.character = character));

  }
  currentCharacter(): Observable<Character>{
    const tid = this.getOne();
    return this.characterService.getCharacterById(tid);
  }



  goBack(): void {
    this.backlocation.back();
  }

  ngOnDestroy(): void {
    this.getAll();
    this.getOne();
    this.currentCharacter();
}
}
