import { Component, OnInit } from '@angular/core';
import { Movies } from '../movies';
import { MoviesService } from '../movies.service';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allmoviess: Movies[] = [];
  formshow:boolean=false;
  constructor(private moviesService: MoviesService) {}
 
  ngOnInit(): void {

    this.get();
  }
 
  get() {
    this.formshow=false;
    this.moviesService.get().subscribe((data) => {
      this.allmoviess = data;
    });
  }

create()
{
  this.formshow=true;
}
}