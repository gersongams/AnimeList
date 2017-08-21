import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

// Observable class extensions
import "rxjs/add/observable/of";

// Observable operators
import "rxjs/add/operator/catch";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";

import { AnimeSearchService } from "./anime.search.service";
import { Anime } from "../anime";

@Component({
  selector: "app-anime-search",
  templateUrl: "./anime-search.component.html",
  styleUrls: ["./anime-search.component.css"],
  providers: [AnimeSearchService]
})
export class AnimeSearchComponent implements OnInit {
  animes: Observable<Anime[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private animeSearchService: AnimeSearchService,
    private router: Router
  ) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.animes = this.searchTerms
      .debounceTime(300) // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged() // ignore if next search term is same as previous
      .switchMap(
        term =>
          term // switch to new observable each time the term changes
            ? // return the http search observable
              this.animeSearchService.search(term)
            : // or the observable of empty heroes if there was no search term
              Observable.of<Anime[]>([])
      )
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Anime[]>([]);
      });
  }

  gotoDetail(anime: Anime): void {
    let link = ["/detail", anime.id];
    this.router.navigate(link);
  }
}
