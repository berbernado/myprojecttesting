import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'colortype'
})
export class ColorTypePipe implements PipeTransform {
  transform(items: any): any {
    if (items === 'normal') {
      return 'badge badge-secondary';
    } else if (items === 'fighting')  {
      return 'badge badge-fight';
    } else if (items === 'flying')  {
      return 'badge badge-fly';
    } else if (items === 'poison')  {
      return 'badge badge-poison';
    } else if (items === 'ground')  {
      return 'badge badge-ground';
    } else if (items === 'rock')  {
      return 'badge badge-secondary';
    } else if (items === 'bug')  {
      return 'badge badge-bug';
    } else if (items === 'ghost')  {
      return 'badge badge-fly';
    } else if (items === 'steel')  {
      return 'badge badge-fly';
    } else if (items === 'fire')  {
      return 'badge badge-danger';
    } else if (items === 'water')  {
      return 'badge badge-primary';
    } else if (items === 'grass')  {
      return 'badge badge-success';
    } else if (items === 'electric')  {
      return 'badge badge-warning';
    } else if (items === 'psychic')  {
      return 'badge badge-dark';
    } else if (items === 'ice')  {
      return 'badge badge-info';
    } else if (items === 'dragon')  {
      return 'badge badge-fire';
    } else if (items === 'dark')  {
      return 'badge badge-dark';
    } else if (items === 'fairy')  {
      return 'badge badge-warning';
    } else if (items === 'unknown')  {
      return 'badge badge-secondary';
    } else if (items === 'shadow')  {
      return 'badge badge-dark';
    }

   }
}