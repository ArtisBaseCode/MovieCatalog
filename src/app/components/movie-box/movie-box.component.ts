import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-box',
  templateUrl: './movie-box.component.html',
  styleUrls: ['./movie-box.component.css'],
})
export class MovieBoxComponent {
  @Input() title: string | undefined;
  @Input() categories: string[] | undefined;
  @Input() imgUrl: string | undefined;
}
