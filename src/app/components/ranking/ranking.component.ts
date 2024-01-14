import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Player } from 'src/app/models/player';
import { PlayersService } from 'src/app/services/players/players.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {
  playerForm: FormGroup;
  players: Player[] = [];
  isFavorite: boolean = false;

  constructor(
    private playersService: PlayersService,
    private fb: FormBuilder
  ) {
    this.playerForm = this.fb.group({
      mobilePhone: [null],
      email: [null],
      name: [null],
      ranking: [null],
      urlPlayerPicture: [null]
    })
  }

  ngOnInit(): void {
    this.getPlayers();
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }

  getPlayers(): void {
    this.playersService.getAllPlayers().subscribe((response: Player[]) => {
      this.players = response;
    })
  }

  onSubmit(): void {
    if (this.playerForm.valid) {
      this.playersService.createPlayer(this.playerForm.value).subscribe(player => {
        this.getPlayers();
      })
    } else {
      this.playerForm.markAllAsTouched();
    }
  }
}