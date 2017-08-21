import { Component, OnInit } from '@angular/core';


import { Anime } from "../anime";
import { AnimeService } from "../anime.service";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  animes: Anime[] = [];

  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    this.animeService
      .getAnimes()
      .then(animes => (this.animes = animes.slice(0, 6)));
  }
}
