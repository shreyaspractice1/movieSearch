import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-searched-component',
  templateUrl: './searched-component.component.html',
  styleUrls: ['./searched-component.component.css']
})
export class SearchedComponentComponent {
  movie: any;

  constructor(private route: ActivatedRoute, private service: MovieService,private router: Router) { }

  ngOnInit(): void {
    this.service.getSelectedMovie().subscribe((selectedMovie: any) => {
      this.movie = selectedMovie;
    });
  }
  return() {
    this.router.navigate(['']);
  }
}
