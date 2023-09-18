import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit{
  // Variables
  movie: Movie = {
    id: '',
    originalTitleText: '',
    primaryImage: '',
    releaseDate: '',
    releaseYear: '',
    titleText: '',
    titleCategory: {
      name: ''
    }
  }
  id: string | null = '';

  // Constructor
  constructor(private route: ActivatedRoute, private movieService: MovieServiceService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if(params.get('id')){
        this.id= params.get('id');

      }
      console.log("MovieId: ", this.id)
    })//subscribe url param
    this.movieService.getMovieById(this.id).subscribe((data) => {
      console.log("Data from getMovieById: ",data)
      this.movie = data;
      console.log("Movie after being injected with datas ",this.movie)
    })//subscribe getMovieById
  }//ng onInit
}
