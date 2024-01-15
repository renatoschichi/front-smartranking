import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Player } from 'src/app/models/player';
import { Sports } from 'src/app/models/sports';
import { PlayersService } from 'src/app/services/players/players.service';
import { SportsService } from 'src/app/services/sports/sports.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {
  playerForm: FormGroup;
  players: Player[] = [];
  isFavorite: boolean = false;
  sports: Sports[] = [];

  constructor(
    private playersService: PlayersService,
    private sportsService: SportsService,
    private fb: FormBuilder
  ) {
    this.playerForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      mobilePhone: [null],
      ranking: [null, Validators.required],
      sport: this.fb.group({
        id: [null],
        name: [null]
      }),
      team: [null]
    })
  }

  ngOnInit(): void {
    this.loadSports();
    this.getPlayers();
  }

  loadSports(): void {
    this.sportsService.getAllSports().subscribe((response: any) => {
      this.sports = response;
    });
  }

  filterRanking() {

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
        this.playerForm.reset();
        this.getPlayers();
      })
    } else {
      this.playerForm.markAllAsTouched();
    }
  }
}