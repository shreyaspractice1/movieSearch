import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = '5c06fed2cdf4dfcdab132d9e67c1c2e7';
  private discoverUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

  private selectedMovieSubject = new Subject<any>();
  searchedMovie: any;

  constructor(private http: HttpClient) { }

  getMovies(): Observable<any> {
    return this.http.get(this.discoverUrl);
  }

  setSelectedMovie(movie: any): void {
    this.selectedMovieSubject.next(movie);
  }

  getSelectedMovie(): Observable<any> {
    return this.selectedMovieSubject.asObservable();
  }

  // Assuming you want to fetch searched movies
  getSearchedMovies(searchUrl: string): Observable<any> {
    return this.http.get(searchUrl);
  }
}
