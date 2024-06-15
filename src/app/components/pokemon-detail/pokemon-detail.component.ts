import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../../service/pokeapi.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  pokemon: Pokemon={
      name: '',
      imageUrl: ''
    };
  };

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.getPokemon(id);
  }

  getPokemon(id: string) {
    this.pokemonService.getPokemon(id).subscribe(pokemon => {
      this.pokemon = pokemon;
    });
  }
}