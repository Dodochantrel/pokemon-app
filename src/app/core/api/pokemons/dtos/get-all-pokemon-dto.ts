import { Pokemon } from '../../../class/pokemon';

export interface GetAllPokemonDto {
  name: string;
  url: string;
}

export const mapFromGetAllPokemonDtoToPokemon = (dto: GetAllPokemonDto): Pokemon => {
  return new Pokemon(dto.name, dto.url);
};

export const mapFromGetAllPokemonDtoArrayToPokemonArray = (dtos: GetAllPokemonDto[]): Pokemon[] => {
  return dtos.map((dto) => mapFromGetAllPokemonDtoToPokemon(dto));
};
