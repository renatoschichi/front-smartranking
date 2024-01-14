import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Player } from 'src/app/models/player';

@Injectable({
  providedIn: 'root'
})

export class PlayersService {
  baseUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {}

  createPlayer(player: Player): Observable<Player> {
    return this.http.post<Player>(`${this.baseUrl}/players`, player).pipe(
      catchError((error) => {
        console.error('Error creating player', error);
        return throwError(error);
      })
    );
  }

  getAllPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.baseUrl}/players`);
  }

  deletePlayer(): Observable<Player> {
    return this.http.delete<Player>(`${this.baseUrl}/players`);
  }
}
