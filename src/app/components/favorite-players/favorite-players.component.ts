import { Component } from '@angular/core';

@Component({
  selector: 'app-favorite-players',
  templateUrl: './favorite-players.component.html',
  styleUrls: ['./favorite-players.component.scss']
})
export class FavoritePlayersComponent {
  isFavorite: boolean = false;

  toggleFavorite() {
    if (this.isFavorite === true) {
      this.isFavorite = false;
    } else {
      this.isFavorite = true;
    }
  }
}
