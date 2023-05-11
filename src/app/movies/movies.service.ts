import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movies } from './movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) {}
  get() {
    return this.http.get<Movies[]>('http://localhost:5260/api/Movies');
  }
}
