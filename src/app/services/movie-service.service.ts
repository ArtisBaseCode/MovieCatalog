import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import axios from 'axios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieServiceService {
  private apiUrl = 'https://streaming-availability.p.rapidapi.com'; //Base URL
  private headers = new HttpHeaders({
    'X-RapidAPI-Key': '119e3c1472msh5acbb06249f5c66p151450jsncc10d0765001',
    'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com',
  });
  options = {
    headers: this.headers,
  };

  constructor(private http: HttpClient) {}

  getTitles(): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}`, this.options);
  }

  getGenres(): Observable<any> {
    const options = {
      headers: this.headers,
    };

    return this.http.get<any>(`${this.apiUrl}/genres`, options);
  }
}
