import { Component, OnInit, Input, Output } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { MovieCategory } from 'src/app/models/category';
import { SelectedcategoryService } from 'src/app/services/selectedcategory.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  // Declared Variables
  titles: any[] = [];
  movies: Movie[] = [];
  displayedMovies: Movie[] = [];
  categories: string[] = [];
  selectedCategory: string = 'All Movies';
  searchText: string = '';

  // Constructor
  constructor(
    private movieService: MovieServiceService,
    private categoryService: SelectedcategoryService,
    private searchService: SearchService
  ) {}

  // On Init
  ngOnInit(): void {
    //Getting selected Category
    this.categoryService.selectedCategory$.subscribe((category) => {
      this.selectedCategory = category;
      this.filterMoviesByCategory(this.selectedCategory);
      console.log(this.selectedCategory);
    });

    //Search Function
    this.searchService.searchText$.subscribe((query) => {
      this.searchText = query; 
      this.filterMoviesBySearch(this.searchText);

    })

    //
    //Getting All Categories and assignin it to Movie Titles
    this.movieService.getGenres().subscribe((data) => {
      if (data.result) {
        for (let ctId in data.result) {
          // console.log('for loop: ', data.result[ctId]);
          let ct = new MovieCategory();
          ct.name = data.result[ctId];
          this.categories.push(ct.name);
        } //for
        // console.log('OnInit  ', this.categories);
      } //if
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
              //
              //Giving movies random categories

              let randomIndex = Math.floor(
                Math.random() * this.categories.length
              );
              // console.log('Kategorite random', this.categories[randomIndex]);
              movie.titleCategory.name = this.categories[randomIndex];
              this.movies.push(movie);
            } // if condition
            //
            //
          } // for loop
          console.log('If Statement', this.selectedCategory);

          // movie.titleCategory?.name = this.categories[randomIndex];

          //
        } //if condition
        //
      }); // movie service
    }); //movie service
    //
    //Getting Movie Titles

    //
  } //On Init

  // Filter Movies Based on selected Category
  filterMoviesByCategory(category: string): void {
    if (category === 'All Movies') {
      this.displayedMovies = this.movies;
    } else {
      this.displayedMovies = this.movies.filter(
        (movie) => movie.titleCategory?.name === category
      );
    }
  }// filter movies by  category

  filterMoviesBySearch(s: string): void{
    if(!s || s=== ''){
      this.displayedMovies = this.movies;
    } else {
      this.displayedMovies = this.movies.filter((movie) => movie.titleText.toLowerCase().includes(s.toLowerCase()))
    }
  }

 
}
