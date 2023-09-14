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
      image: '',
      title: 'Movie',
      categories: ['comedy'],
      description: '',
    },
    {
      id: 1,
      image: '',
      title: 'Movie',
      categories: ['comedy'],
      description: '',
    },
    {
      id: 1,
      image: '',
      title: 'Movie',
      categories: ['comedy'],
      description: '',
    },
    {
      id: 1,
      image: '',
      title: 'Movie',
      categories: ['comedy'],
      description: '',
    },
    {
      id: 1,
      image: '',
      title: 'Movie',
      categories: ['comedy'],
      description: '',
    },
    {
      id: 1,
      image: '',
      title: 'Movie',
      categories: ['comedy'],
      description: '',
    },
    {
      id: 1,
      image: '',
      title: 'Movie',
      categories: ['comedy'],
      description: '',
    },
    {
      id: 1,
      image: '',
      title: 'Movie',
      categories: ['comedy'],
      description: '',
    },
    {
      id: 1,
      image: '',
      title: 'Movie',
      categories: ['comedy'],
      description: '',
    },
  ];
}
