import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { UrlCollection } from '../../../config/UrlCollection';
@Pipe({
  name: 'GetPhoto',
  pure: true
})
export class GetPhoto implements PipeTransform {
  public getrul: any;
  constructor(private httpService: HttpClient) { }
  
  transform(value: number, args?: any): any {
    let url : any;
    
    

    try {
        url = this.getPhoto(value);
        console.log(url);
    } catch (e) {
        // No content response..
        console.log('error');
    }
    
    
    //this.getPokeImages(value);
    return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';
  }

  getPhoto(id){
    this.getPartners(id).then(data => {
        console.log(data.sprites.front_default);
        return data.sprites.front_default
      });
  }

  getPartners(id) {
    return new Promise(resolve => {
      this.httpService.get(UrlCollection.FORMPOKEMON + id + '/')
        .map(results => results)
        .subscribe(data => {
          this.getrul = data;
          resolve(this.getrul);
        });
    });
  }

  getPokeImages(id){ 
    let url : any;
    this.httpService.get<any>(UrlCollection.FORMPOKEMON + id + '/').subscribe(
        data => {
          url = data.sprites.front_default;
        },
          error => {
          console.log(error);
        });
    console.log(url);
  }
}