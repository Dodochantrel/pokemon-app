import { Pokemon } from '../../../class/pokemon';

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface PokemonSprites {
  front_default: string | null;
  front_shiny: string | null;
  front_female: string | null;
  front_shiny_female: string | null;
  back_default: string | null;
  back_shiny: string | null;
  back_female: string | null;
  back_shiny_female: string | null;
  other?: {
    'official-artwork'?: {
      front_default: string | null;
      front_shiny: string | null;
    };
  };
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface GetPokemonDetailsDto {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  types: PokemonType[];
  abilities: PokemonAbility[];
  sprites: PokemonSprites;
  stats: PokemonStat[];
}

export const mapFromGetPokemonDetailsDtoToPokemon = (dto: GetPokemonDetailsDto): Pokemon => {
  const pokemon = new Pokemon(dto.name, '');
  pokemon.id = dto.id;
  pokemon.height = dto.height;
  pokemon.weight = dto.weight;
  pokemon.baseExperience = dto.base_experience;
  pokemon.types = dto.types.map(t => t.type.name);
  pokemon.abilities = dto.abilities.map(a => a.ability.name);
  pokemon.sprite = dto.sprites.other?.['official-artwork']?.front_default ?? dto.sprites.front_default;
  pokemon.stats = dto.stats.map(s => ({
    name: s.stat.name,
    baseStat: s.base_stat,
  }));
  return pokemon;
};
