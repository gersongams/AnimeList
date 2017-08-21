import "rxjs/add/operator/switchMap";

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Location } from "@angular/common";

import { Anime } from "../anime";
import { AnimeService } from "../anime.service";

@Component({
  selector: "app-anime-detail",
  templateUrl: "./anime-detail.component.html",
  styleUrls: ["./anime-detail.component.css"]
})
export class AnimeDetailComponent implements OnInit {
  anime: Anime;

  constructor(
    private animeService: AnimeService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.animeService.getAnime(+params.get("id"))
      )
      .subscribe(anime => (this.anime = anime));
  }

  save(): void {
    this.animeService.update(this.anime).then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
