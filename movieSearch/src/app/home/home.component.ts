import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  moviedetails: boolean = true;
  movies: any = [];

  searchQuery: string = '';
  searchResults: any = [];

  

  constructor(private router: Router, private service: MovieService) {}

  ngOnInit(): void {
    this.service.getMovies().subscribe((data: any) => {
      this.movies = data.results;
    });
  }

  navigateToSearchedComponent(id: number): void {
    this.router.navigate([
      { outlets: { searchedComponentOutlet: ['searchedComponent', id] } },
    ]);
  }

  showMovieDetails(movie: any): void {
    this.moviedetails = false;
    
    this.service.setSelectedMovie(movie);
    this.router.navigate([
      { outlets: { searchedComponentOutlet: ['/movie', movie.id] } },
    ]);
    
  }

  searchMovies() {
    const apiKey = '5c06fed2cdf4dfcdab132d9e67c1c2e7';
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${this.searchQuery}&page=1&include_adult=false`;

    this.service.getSearchedMovies(searchUrl).subscribe((data: any) => {
      this.searchResults = data.results;
      // Assuming you want to display search results, you can assign them to this.movies
      this.movies = this.searchResults;
    });
    this.router.navigate(['searchedComponent']);
  }
}
