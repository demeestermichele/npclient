import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Character} from "../models/character.model";
import {environment} from "../../../environments/environment";

@Injectable()
export class CharacterService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
  };
    constructor(private http: HttpClient) { }

 private charactersURL = "localhost:8080/character-list"

  getCharacters(): Observable<Character[]> {
    const characters = of(characters);
    return heroes;
  }


/*
  getAllCharacters(): Observable<Character[]> {
    const url = `${environment.characterUrl}/character-list/`;
    console.log('this is from getAllCharacters');
    return this.http.get<Character[]>(url, this.httpOptions);
  }

  getCharacterById(id: number): Observable<Character> {
    const url = `${environment.characterUrl}/find/${id}`;
    return this.http.get<Character>(url, this.httpOptions);
  }
*/

}
