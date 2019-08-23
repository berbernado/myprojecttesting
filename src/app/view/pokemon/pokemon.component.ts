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
  public dataPoke = [];
  public geturl: any;

  public nexturl: any;
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
    let url = '';
    if (this.geturl === undefined || this.geturl === ''){
      url = UrlCollection.LISTPOKEMON + '?offset='+this.page+'&limit='+ this.limit;
    } else {
      url = this.geturl;
    };
     
    console.log(url);
    this.httpService.get<any>( url,
      {
        headers:{
          'content-Type': 'application/json',
        }
      }).subscribe(data => {
      this.total = data.count;
      this.nexturl = data.next;
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
    for (const result of this.arrPoke) {
      this.httpService.get<any>(UrlCollection.LISTPOKEMON + (id + 1) + '/').subscribe(
        detilpoke => {
          this.httpService.get<any>(UrlCollection.FORMPOKEMON + detilpoke.id + '/').subscribe(
            data => {
              this.dataPoke.push({idpoke: detilpoke.id,
                name: detilpoke.name,
                typepoke: detilpoke.types,
                photo: data.sprites.front_default,
              });
              this.listpoke = this.dataPoke.sort((a, b) => {
                return a.idpoke - b.idpoke;
              });
            },
              error => {
              console.log(error);
            });
        },
          error => {
          console.log(error);
        });
        id = id + 1;
    }

  }

  loadmore(): void {
    this.geturl = this.nexturl;
    this.page = this.page + 21;
    this.getAllpkemon();
  }
  
}