import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';
import { PokemonService } from '../pokemon/pokemon.service';
import { CreatePokemonDto } from '../pokemon/dto/create-pokemon.dto';
import { AxiosAdapter } from '../common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  constructor(
    private readonly pokemonService: PokemonService,
    private readonly http: AxiosAdapter,
  ) {}

  async executeSeed() {
    await this.pokemonService.removeAll('ALV');

    const dataPokemons: CreatePokemonDto[] = [];
    const data = await this.http.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=400',
    );

    data.results.forEach(({ name, url }) => {
      name = name.toLowerCase();
      const segments = url.split('/');
      const no = +segments[segments.length - 2];

      dataPokemons.push({
        name,
        no,
      });
    });

    console.table(dataPokemons);
    await this.pokemonService.createWithSeed(dataPokemons);

    return `Seed Executed`;
  }
}
