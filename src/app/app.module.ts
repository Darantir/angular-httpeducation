import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SimpleHttpComponent } from './simple-http/simple-http.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, SimpleHttpComponent, SearchResultComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
