import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  data: any = null;

  constructor( public http: Http ) { }

  load( id ) {
    return new Promise( resolve => {
      this.http.get("https://pokeapi.co/api/v2/pokemon/" + id )
        .map( res => res.json() )
        .subscribe( data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  getPokemon(id){
    return this.load(id).then( data => {
      return data;
    })
  }
}
