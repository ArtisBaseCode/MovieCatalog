import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import axios from 'axios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieServiceService {
  //Stream Availability Api

  private apiStreamUrl = 'https://streaming-availability.p.rapidapi.com'; //Base URL
  private streamAvailabilityHeaders = new HttpHeaders({
    'X-RapidAPI-Key': '73754c0e3bmshb2dcc58e8201b46p18b4f1jsnd1c386709048',
    'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com',
  });
  optionsStreamApi = {
    headers: this.streamAvailabilityHeaders,
  };

  //Movie-Database api

  private apiMovieDbUrl = 'https://moviesdatabase.p.rapidapi.com/titles';
  private movieDbHeaders = new HttpHeaders({
    'X-RapidAPI-Key': '119e3c1472msh5acbb06249f5c66p151450jsncc10d0765001',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
  });
  optionsMovieDb = {
    headers: this.movieDbHeaders,
  };

  //Rest of code
  constructor(private http: HttpClient) {}

  getTitles(): Observable<any> {
    return this.http.get<any[]>(`${this.apiMovieDbUrl}`, this.optionsMovieDb);
  }

  getGenres(): Observable<any> {
    const options = {
      headers: this.streamAvailabilityHeaders,
    };

    return this.http.get<any>(`${this.apiStreamUrl}/genres`, options);
  }
}
