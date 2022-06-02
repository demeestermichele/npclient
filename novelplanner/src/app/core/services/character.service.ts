import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Character} from "../models/character.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
  };
    constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<Character[]> {
    const url = `${environment.characterUrl}/character-list`;
    console.log('this is from getAllCharacters');
    return this.http.get<Character[]>(url, this.httpOptions);
  }

}
