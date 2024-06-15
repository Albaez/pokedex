import { TestBed } from '@angular/core/testing';

import { PokemonService } from './pokeapi.service';

describe('PokeapiService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
