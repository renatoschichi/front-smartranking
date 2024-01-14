import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { PlayersService } from 'src/app/services/players/players.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {
  players = [
    { _id: '1', mobilePhone: '123456789', email: 'john@example.com', name: 'John Doe', ranking: 'A', rankingPosition: 1, urlPlayerPicture: 'https://example.com/john.jpg' }
  ];

  constructor(
    private playersService: PlayersService
  ) {}

  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers(): void {
    this.playersService.getAllPlayers().subscribe((response: Player[]) => {
      response = response.filter(p => p.name);
      console.log(response)
    })
  }
}
