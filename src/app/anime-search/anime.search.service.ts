import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

import { Anime } from "../anime";

@Injectable()
export class AnimeSearchService {
  constructor(private http: Http) {}

  search(term: string): Observable<Anime[]> {
    return this.http
      .get(`api/animes/?name=${term}`)
      .map(response => response.json().data as Anime[]);
  }
}
