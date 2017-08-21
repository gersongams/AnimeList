import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";

import "rxjs/add/operator/toPromise";

import { Anime } from "./anime";

@Injectable()
export class AnimeService {
  private headers = new Headers({ "Content-Type": "application/json" });
  private animesUrl = "api/animes"; // URL to web api

  constructor(private http: Http) {}

  getAnimes(): Promise<Anime[]> {
    return this.http
      .get(this.animesUrl)
      .toPromise()
      .then(response => response.json().data as Anime[])
      .catch(this.handleError);
  }

  getAnime(id: number): Promise<Anime> {
    const url = `${this.animesUrl}/${id}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response.json().data as Anime)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.animesUrl}/${id}`;
    return this.http
      .delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Anime> {
    return this.http
      .post(this.animesUrl, JSON.stringify({ name: name }), {
        headers: this.headers
      })
      .toPromise()
      .then(res => res.json().data as Anime)
      .catch(this.handleError);
  }

  update(anime: Anime): Promise<Anime> {
    const url = `${this.animesUrl}/${anime.id}`;
    return this.http
      .put(url, JSON.stringify(anime), { headers: this.headers })
      .toPromise()
      .then(() => anime)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error("An error occurred", error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
