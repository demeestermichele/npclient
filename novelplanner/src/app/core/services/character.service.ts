import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError, of} from "rxjs";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Character} from "../models/character.model";
import {environment} from "../../../environments/environment";
import {catchError, map} from "rxjs/operators";

@Injectable()
export class CharacterService {
  private charactersURL = "http://localhost:8080/character-list/"

    constructor(private http: HttpClient) { }


  getAllCharacters() {
    return this.http
      .get<Character[]>(this.charactersURL)
      .pipe(map(data => data), catchError(this.handleError));
  }
  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
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
