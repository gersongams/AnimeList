import "rxjs/add/operator/switchMap";

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Location } from "@angular/common";

import { Anime } from "../anime";
import { AnimeService } from "../anime.service";
import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl
} from "@angular/platform-browser";
import {SafePipe} from './safe.pipe';

@Component({
  selector: "app-anime-detail",
  templateUrl: "./anime-detail.component.html",
  styleUrls: ["./anime-detail.component.css"]
})
export class AnimeDetailComponent implements OnInit {
  anime: Anime;
  dangerousUrl: string;
  trustedUrl: SafeUrl;
  dangerousVideoUrl: string;
  videoUrl: SafeResourceUrl;

  constructor(
    private animeService: AnimeService,
    private route: ActivatedRoute,
    private location: Location,
    private sanitizer: DomSanitizer
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.animeService.getAnime(+params.get("id"))
      )
      .subscribe(anime => (this.anime = anime));
  }

  goBack(): void {
    this.location.back();
  }

  updateVideoUrl(linkvideo: string) {
    // Appending an ID to a YouTube URL is safe.
    // Always make sure to construct SafeValue objects as
    // close as possible to the input data so
    // that it's easier to check if the value is safe.
    this.dangerousVideoUrl = linkvideo;
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.dangerousVideoUrl
    );
  }
}
