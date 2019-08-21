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
      this.arrPoke = data ;
      this.loading = false;
    },
      error => {
        if (error.status === '401') {
          console.log(error);
      }
    });
  }

}