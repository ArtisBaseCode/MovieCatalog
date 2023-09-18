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
  categories: string[] = ['Action', 'Sci-fi', 'History', 'Drama', "Tv-Show", 'Thriller', "Fantasy", "Adventure"]
  // Constructor
  constructor(private route: ActivatedRoute, private movieService: MovieServiceService) {}

  ngOnInit(): void {
    let randomIndex = Math.floor(Math.random() * this.categories.length)
    this.route.paramMap.subscribe(params => {
      if(params.get('id')){
        this.id= params.get('id');

      }
      // console.log("MovieId: ", this.id)
    })//subscribe url param
    this.movieService.getMovieById(this.id).subscribe((data) => {
      // console.log("Data from getMovieById: ",data)
      this.movie.id = data.results.id;
      this.movie.originalTitleText = data.results.originalTitleText;
      this.movie.primaryImage = data.results.primaryImage.url;
      this.movie.titleText = data.results.titleText.text;
      this.movie.releaseDate = data.results.releaseDate.month;
      this.movie.releaseYear = data.results.releaseYear.year;
      this.movie.titleCategory.name = this.categories[randomIndex];
      // console.log("Movie after being injected with datas ",this.movie)
    })//subscribe getMovieById
  }//ng onInit
}
