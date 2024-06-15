import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDetallePokemon } from '../interfaces/IDetallePokemon';
import { IListadoPokemon } from '../interfaces/IListaadoPokemon';
import { IPokemonAbility } from '../interfaces/IPokemonAbility';
import { IPokemonSpecies } from '../interfaces/IPokemonSpecies';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrlBase = "https://pokeapi.co/api/v2"


  constructor(private cliente: HttpClient) { }

  getPokemons(limit: number): Observable<IListadoPokemon>{
    const resultado = this.cliente.get<IListadoPokemon>(`${this.apiUrlBase}/pokemon/?limit=${limit}`)
    return resultado;
  }

  getDetallesPokemon(url: string): Observable<IDetallePokemon>{
    return this.cliente.get<IDetallePokemon>(url)
  }

  getAbility(idOrName: string) {
    return this.cliente.get<IPokemonAbility>(`https://pokeapi.co/api/v2/ability/${idOrName}/`);
  }
  
  getPokemonSpecies(idOrName: string) {
    return this.cliente.get<IPokemonSpecies> (`https://pokeapi.co/api/v2/pokemon-species/${idOrName}/`);
  }

}
