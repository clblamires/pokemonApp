import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  data: any = null;

  constructor( public http: Http ) { }

  loadNames() {
    // if( this.data ){
    //   return Promise.resolve(this.data);
    // }

    // return new Promise( resolve => {
    //   this.http.get("https://github.com/sindresorhus/pokemon/blob/master/data/en.json")
    // });
  }
}
