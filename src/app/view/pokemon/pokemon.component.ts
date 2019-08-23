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
  public geturl: any;
  public countpoke: any;
  loading = false;
  total = 0;
  page = 0;
  limit = 21;
  constructor(private httpService: HttpClient) { }

  ngOnInit() {
    this.getAllpkemon();
  }

  getAllpkemon() {
    this.loading = true;
    const url = UrlCollection.LISTPOKEMON + '?offset='+this.page+'&limit='+ this.limit;
    this.httpService.get<any>( url,
      {
        headers:{
          'content-Type': 'application/json',
        }
      }).subscribe(data => {
      this.total = data.count;
      this.arrPoke = data.results;
      this.getPokeImages();
      this.loading = false;
    },
      error => {
        if (error.status === '401') {
          console.log(error);
      }
    });
  }

  getPokeImages(){ 
    let id = this.page;
    /*if (this.page>0){
      this.listpoke.length = 0;
    }*/
    for (const result of this.arrPoke) {
      this.httpService.get<any>(UrlCollection.FORMPOKEMON + id + '/').subscribe(
        data => {
          this.listpoke.push({idpoke: id,
             name: data.name,
              photo: data.sprites.front_default
              });
        },
          error => {
          console.log(error);
        });
        id = id + 1;
    }
    
  }

  loadmore(): void {
    this.page = this.page + 21;
    this.getAllpkemon();
  }
  
}