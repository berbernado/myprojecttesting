import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlCollection } from '../../../config/UrlCollection';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  
  public arrPoke: any;
  loadimg = true;
  loading = false;
  constructor(private httpService: HttpClient) { }

  ngOnInit() {
    this.getAllpkemon();
  }

  getAllpkemon() {
    this.loading = true;
    this.httpService.get<any>(UrlCollection.LISTPOKEMON,
      {
        headers:{
          'content-Type': 'application/json',
        }
      }).subscribe(data => {
      this.arrPoke = data.results ;
      this.loading = false;
    },
      error => {
        if (error.status === '401') {
          console.log(error);
      }
    });
  }

  getPokeImages(id){
    this.httpService.get<any>(UrlCollection.FORMPOKEMON + id + '/',
      {
        headers:{
          'content-Type': 'application/json',
        }
      }).subscribe(data => {
        console.log(data);
        return data.sprites.front_default;
    },
      error => {
        return "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/0.16.1/images/loader-large.gif";
    });
    
    
  }
}