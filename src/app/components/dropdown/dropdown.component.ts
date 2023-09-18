import { Component, Input, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { MovieCategory } from 'src/app/models/category';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent implements OnInit {
  categories: MovieCategory[];
  @Input() title: string | undefined;
  toggle: boolean = false;

  onToggle(): void {
    this.toggle = !this.toggle;
  }
  constructor(private movieService: MovieServiceService) {
    this.categories = [];
  }

  ngOnInit(): void {
    this.movieService.getGenres().subscribe((data) => {
      if (data.result) {
        for (let ctId in data.result) {
          // console.log('for loop: ', data.result[ctId]);
          let ct = new MovieCategory();
          ct.name = data.result[ctId];
          this.categories.push(ct);
        }
        // console.log('OnInit  ', this.categories);
      }
    });
  }
}
