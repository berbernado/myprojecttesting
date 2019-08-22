import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { UrlCollection } from '../../../config/UrlCollection';
@Pipe({
  name: 'GetPhoto',
  pure: true
})
export class GetPhoto implements PipeTransform {
  public getrul: any;
  constructor(private httpService: HttpClient) { }
  
  transform(value: number, args?: any): any {
    this.getPokeImages(value);
    let url = this.getPokeImages(1);
    console.log(url);
    return ;
  }

  getPokeImages(id){ 
    let urlnya;
    this.httpService.get<any>(UrlCollection.FORMPOKEMON + id + '/',
      {
        headers:{
          'content-Type': 'application/json',
        }
      }).subscribe(
        data => {
          this.getrul = data.sprites.front_default;
        },
          error => {
          console.log(error);
        });
  }
}