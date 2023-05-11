import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { HomeComponent } from './home/home.component';
import { CreateMoviesComponent } from './create-movies/create-movies.component';


@NgModule({
  declarations: [
    HomeComponent,
    CreateMoviesComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
