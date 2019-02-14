import { TestBed } from '@angular/core/testing';

import { PokemonNamesService } from './pokemon-names.service';

describe('PokemonNamesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokemonNamesService = TestBed.get(PokemonNamesService);
    expect(service).toBeTruthy();
  });
});
