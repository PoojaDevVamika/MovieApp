import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateMoviesComponent } from './create-movies/create-movies.component';



const routes: Routes = [
  {
    path: 'home',component: HomeComponent,
  },
  {
    path: 'create',component: CreateMoviesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
