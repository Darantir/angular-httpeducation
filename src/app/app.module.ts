import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SimpleHttpComponent } from './simple-http/simple-http.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { YouTubeSearchService } from './you-tu-be-search/you-tube-search.service';
import {youTubeSearchInjectables} from './you-tu-be-search/you-tu-be-search.injectable';
import { SearchBoxComponent } from './you-tu-be-search/search-box/search-box.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, SimpleHttpComponent, SearchBoxComponent ],
  bootstrap:    [ AppComponent ],
  providers: [YouTubeSearchService]
})
export class AppModule { }
