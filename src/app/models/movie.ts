import { MovieCategory } from './category';

export class Movie {
  id?: number;
  originalTitleText: string;
  primaryImage: string;
  releaseDate: string;
  releaseYear: string;
  titleText: string;
  titleCategory: MovieCategory;

  constructor() {
    this.originalTitleText = '';
    this.primaryImage = '';
    this.releaseDate = '';
    this.releaseYear = '';
    this.titleText = '';
    this.titleCategory = {
      name: '',
    };
  }
}
