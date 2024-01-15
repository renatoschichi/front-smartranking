import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { FavoritePlayersComponent } from './components/favorite-players/favorite-players.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { RankingDirective } from './directives/ranking.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RankingComponent,
    FavoritePlayersComponent,
    AboutusComponent,
    RankingDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})

export class AppModule { }