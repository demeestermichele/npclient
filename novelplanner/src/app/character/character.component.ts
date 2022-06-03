import {Component, Input, OnInit} from '@angular/core';
import {CharacterService} from "../core/services/character.service";
import {Observable, Subscription} from 'rxjs';
import {Character} from "../core/models/character.model";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  characters: Character[];
  subscription: Subscription[] = [];
  id: number = +this.route.snapshot.paramMap.get('id');

  @Input() character: Character;

  constructor(
    private http: HttpClient,
    private characterService: CharacterService,
  private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    console.log('charactercomponent.getall');
    // return this.characterService.getAllCharacters();
    return this.subscription.push(this.characterService.getAllCharacters().subscribe(characters => this.characters = characters));
  }

/*  getCharacter(id: number): Character{
    return this.character[id - 1]
  }*/

  getCharacter() {
    console.log('characterdetail.initcharacter');
    return this.subscription.push(this.characterService.getCharacterById(this.id).subscribe(character => this.character = character));
  }

}
