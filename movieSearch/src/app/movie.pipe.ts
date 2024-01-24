import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movie'
})
export class MoviePipe implements PipeTransform {
  transform(value: number): string {
    return `${(value / 1000).toFixed(0)}k`;
  }

}
