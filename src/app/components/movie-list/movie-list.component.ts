import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  titles: any[] = [];
  movies: Movie[] = [];
  constructor(private movieService: MovieServiceService) {}
  ngOnInit(): void {
    this.movieService.getTitles().subscribe((data) => {
      // console.log(data.results);
      if (data.results) {
        for (let mv of data.results) {
          if (mv) {
            // console.log(mv.titleText.text);
            let movie = new Movie();
            // movie.id = '';
            movie.id = mv.id;
            movie.originalTitleText = mv.originalTitleText;
            movie.primaryImage = mv.primaryImage?.url;
            movie.releaseDate = mv.releaseDate;
            movie.releaseYear = mv.releaseYear.year;
            movie.titleText = mv.titleText.text;
            this.movies.push(movie);
          }
          console.log('If Statement', this.movies);
        }
      }
    });
  }
}
