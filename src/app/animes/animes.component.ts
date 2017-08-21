import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Anime } from "../anime";
import { AnimeService } from "../anime.service";

@Component({
  selector: "app-animes",
  templateUrl: "./animes.component.html",
  styleUrls: ["./animes.component.css"],
  providers: [AnimeService]
})
export class AnimesComponent implements OnInit {
  animes: Anime[];
  selectedAnime: Anime;

  constructor(private animeService: AnimeService, private router: Router) {}

  getAnimes(): void {
    this.animeService.getAnimes().then(animes => (this.animes = animes));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.animeService.create(name).then(anime => {
      this.animes.push(anime);
      this.selectedAnime = null;
    });
  }

  delete(anime: Anime): void {
    this.animeService.delete(anime.id).then(() => {
      this.animes = this.animes.filter(h => h !== anime);
      if (this.selectedAnime === anime) {
        this.selectedAnime = null;
      }
    });
  }

  ngOnInit(): void {
    this.getAnimes();
  }

  onSelect(anime: Anime): void {
    this.selectedAnime = anime;
  }

  gotoDetail(): void {
    this.router.navigate(["/detail", this.selectedAnime.id]);
  }
}
