import { Component } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  constructor(private searchService: SearchService){

  }

  onInput(v: string): void{
    console.log("Search-Bar onInput Function: ",v)
    this.searchService.setSearchText(v);
  }
}
