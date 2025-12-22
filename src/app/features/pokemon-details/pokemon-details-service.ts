import { effect, inject, Injectable, signal } from '@angular/core';
import { PokemonsRoutes } from '../../core/api/pokemons/routes/pokemons-api';
import { NotificationService } from '../../core/notification/notification-service';
import { Pokemon } from '../../core/class/pokemon';
import { GetPokemonDetailsDto, mapFromGetPokemonDetailsDtoToPokemon } from '../../core/api/pokemons/dtos/get-pokemon-details-dto';
import { HttpErrorResponse, httpResource } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonDetailsService {
  private pokemonApiRoutes: PokemonsRoutes = new PokemonsRoutes();
  private notificationService: NotificationService = inject(NotificationService);

  private readonly pokemonResource = httpResource<GetPokemonDetailsDto>(
    () =>
      this.pokemonApiRoutes.getByNameUrl(this.name())
  );

  public name = signal<string>('');  
  public pokemon = signal<Pokemon | null>(null);

  private updatePokemonsOnValue = effect(() => {
    const resource = this.pokemonResource.value();
    if (resource) {
      this.pokemon.set(mapFromGetPokemonDetailsDtoToPokemon(resource));
    } else {
      this.pokemon.set(null);
    }
  });

  private notifyOnError = effect(() => {
    const err = this.pokemonResource.error() as HttpErrorResponse | null;
    if (err) {
      const detail = err.message ?? 'Une erreur est survenue.';
      this.notificationService.error(`Erreur lors de la récupération de ${this.name()}`, detail);
    }
  });

  public isLoading = this.pokemonResource.isLoading;
}
