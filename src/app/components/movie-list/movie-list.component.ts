import { Component } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent {
  movies: Movie[] = [
    {
      id: 1,
      image: '#',
      title: 'Movie1',
      categories: ['Action', 'Comedy'],
      description: 'movie',
    },
    {
      id: 2,
      image: '#',
      title: 'Movie3',
      categories: ['Sci-fi'],
      description: 'movie',
    },
    {
      id: 3,
      image: '#',
      title: 'Movie3',
      categories: ['Comedy'],
      description: 'movie',
    },
  ];
}
