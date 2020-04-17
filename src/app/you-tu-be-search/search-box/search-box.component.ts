import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { SearchResult} from '../you-tu-be-search/search-result.model';


@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();
  constructor() { }

  ngOnInit() {
  }

}