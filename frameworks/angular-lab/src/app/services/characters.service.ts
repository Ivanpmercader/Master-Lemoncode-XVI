import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RickMortyInfoCharacter } from '../models/RickMorty/RickMortyInfoCharacter';
import { Observable, map } from 'rxjs';
import { RickMortyCharacter } from '../models/RickMorty/RickMortyCharacter';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private _http: HttpClient) { }

  getAll(): Observable<RickMortyInfoCharacter[]>{
    return this._http.get<RickMortyCharacter>('https://rickandmortyapi.com/api/character/')
    .pipe(
      map(
        (data: RickMortyCharacter): RickMortyInfoCharacter[] => data.results)
    );
  }

}