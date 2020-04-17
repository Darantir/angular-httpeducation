import { Injectable, Inject,  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchResult} from './search-result.model';
import {Observable} from 'rxjs/Rx';
export const YOUTUBE_API_KEY = "XXX_YOUR_KEY_HERE_XXX";
export const YOUTUBE_API_URL: string = "https://www.googleapis.com/youtube/v3/search";

@Injectable()



export class YouTubeSearchService {

  constructor(private http: HttpClient, 
  @Inject(YOUTUBE_API_KEY) private apiKey:string,
  @Inject(YOUTUBE_API_URL) private apiUrl:string ) 
  {
   
  }

  search(query: string): Observable<SearchResult[]> {
   const params: string = [
   `q=${query}`,
   `key=${this.apiKey}`,
   `part=snippet`,
   `type=video`,
   `maxResults=10`
  ].join('&');
   const queryUrl = `${this.apiUrl}?${params}`
  }
}