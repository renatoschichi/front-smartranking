import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RankingComponent } from './components/ranking/ranking.component';
import { FavoritePlayersComponent } from './components/favorite-players/favorite-players.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';

const routes: Routes = [
  { path: 'home', component: RankingComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'favorite-players', component: FavoritePlayersComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }