import { Component, OnInit,Input,Output, EventEmitter, ElementRef } from '@angular/core';
import { SearchResult} from './src/app/you-tu-be-search/search-result.model';
import { YouTubeSearchService } from '../you-tube-search.service';
import {Observable} from 'rxjs'


@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();
  constructor(private youtube: YouTubeSearchService,
  private el: ElementRef) { }

  ngOnInit(): void {
    Observable.fromEvent(this.el.nativeElement, 'keyup')
  }

}