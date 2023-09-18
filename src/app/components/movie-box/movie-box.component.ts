import { Component, Input } from '@angular/core';
import { MovieCategory } from 'src/app/models/category';

@Component({
  selector: 'app-movie-box',
  templateUrl: './movie-box.component.html',
  styleUrls: ['./movie-box.component.css'],
})
export class MovieBoxComponent {
  @Input() movieId: string | undefined = '';
  @Input() title: string | undefined;
  @Input() categories: MovieCategory | undefined;
  @Input() imgUrl: string | undefined;
}
