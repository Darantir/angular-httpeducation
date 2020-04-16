import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SimpleHttpComponent } from './simple-http/simple-http.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { YoutubeSearchServiceService } from './youtube-search-service.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, SimpleHttpComponent ],
  bootstrap:    [ AppComponent ],
  providers: [YoutubeSearchServiceService]
})
export class AppModule { }
