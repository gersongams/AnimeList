import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from "@angular/forms"; // <-- NgModel lives here
import { HttpModule } from "@angular/http";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnimesComponent } from './animes/animes.component';
import { AnimeService } from "./anime.service";
import { AnimeSearchComponent } from './anime-search/anime-search.component';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from "angular-in-memory-web-api/in-memory-web-api.module";
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AnimesComponent,
    AnimeSearchComponent,
    AnimeDetailComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(), // Add Bootstrap module here.
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    FormsModule // <-- import the FormsModule before binding with [(ngModel)]
  ],
  providers: [AnimeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
