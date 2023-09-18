import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SelectedcategoryService {
  private selectedCategorySubject = new BehaviorSubject<string>('All Movies');
  selectedCategory$ = this.selectedCategorySubject.asObservable();

  setSelectedCategory(category: string): void {
    this.selectedCategorySubject.next(category);
  }
}
