import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { MovieCategory } from 'src/app/models/category';
import { SelectedcategoryService } from 'src/app/services/selectedcategory.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent implements OnInit {
  categories: MovieCategory[];
  @Input() title: string | undefined;
  toggle: boolean = false;
  @Output() selectedCategory: EventEmitter<string> = new EventEmitter();

  onToggle(): void {
    this.toggle = !this.toggle;
  }
  constructor(
    private movieService: MovieServiceService,
    private selectCategoryService: SelectedcategoryService
  ) {
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

  onSelectCategory(v: string): void {
    console.log(v);
    this.selectCategoryService.setSelectedCategory(v);
  }
}
