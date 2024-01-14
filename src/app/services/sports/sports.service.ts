import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sports } from 'src/app/models/sports';

@Injectable({
  providedIn: 'root'
})
export class SportsService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:8080/api/v1';

  getAllSports() {
    return this.http.get<Sports>(this.baseUrl + '/sports');
  }
}
