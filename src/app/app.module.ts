import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnimesComponent } from './animes/animes.component';
import { AnimeSearchComponent } from './anime-search/anime-search.component';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, AnimesComponent, AnimeSearchComponent, AnimeDetailComponent],
  imports: [
    BrowserModule,
    NgbModule.forRoot() // Add Bootstrap module here.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
