import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { MovieComponent } from './components/movie/movie.component';
import { CatComponent } from './components/cat/cat.component';
import { DogComponent } from './components/dog/dog.component';

import { AppRoutingModule } from './routes/routing.module';
@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    CatComponent,
    HeaderComponent,
    DogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
