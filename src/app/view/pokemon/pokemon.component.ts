import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlCollection } from '../../../config/UrlCollection';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  
  public arrPoke: [];
  public listpoke = [];
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
      this.arrPoke = data.results;
      let i = 0;
      for (const result of this.arrPoke) {
           i = i + 1;
           let urlphoto = this.getPokeImages(i);
          this.listpoke.push({
              id: i,
              nama: result.name,
              foto: urlphoto
          });
        }
      console.log(this.listpoke);
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
        return data.sprites.front_default;
    },
      error => {
        return "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/0.16.1/images/loader-large.gif";
    });
    ;
    
  }
}