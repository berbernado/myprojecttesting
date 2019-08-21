import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getAllInnovation() {
    this.loadingawal = true;
    this.httpService.get<any>(this.IPURL + UrlCollection.GETPROGRESINNOVATION + this._myconfig.getNip(),
      {
        headers:{
          'content-Type': 'application/json',
          'Authorization': 'Bearer ' + this._myconfig.getToken()
        }
      }).subscribe(resInno => {
      this.arrInnovation = resInno ;
      this.loadingawal = false;
    },
      error => {
        if (error.status === '401') {
          this._myconfig.logoutService();
      }
    });
  }

}