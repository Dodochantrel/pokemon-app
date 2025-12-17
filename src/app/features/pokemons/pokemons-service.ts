import { effect, inject, Injectable, signal } from '@angular/core';
import { PokemonsRoutes } from '../../core/api/pokemons/routes/pokemons-api';
import { HttpErrorResponse, httpResource } from '@angular/common/http';
import { PaginatedResponseDto } from '../../core/api/paginated-reponse-dto';
import { NotificationService } from '../../core/notification/notification-service';
import { GetAllPokemonDto, mapFromGetAllPokemonDtoArrayToPokemonArray } from '../../core/api/pokemons/dtos/get-all-pokemon-dto';
import { Pokemon } from '../../core/class/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private pokemonApiRoutes: PokemonsRoutes = new PokemonsRoutes();
  private notificationService: NotificationService = inject(NotificationService);

  private readonly pokemonResource = httpResource<PaginatedResponseDto<GetAllPokemonDto>>(
    () =>
      this.pokemonApiRoutes.getAllUrl(
        this.limit(), this.offset()
      )
  );

  public pokemons = signal<Pokemon[]>([]);
  public offset = signal(0);
  public limit = signal(20);

  private updatePokemonsOnValue = effect(() => {
    const resource = this.pokemonResource.value();
    if (resource) {
      this.pokemons.set(mapFromGetAllPokemonDtoArrayToPokemonArray(resource.results));
    } else {
      this.pokemons.set([]);
    }
  });

  private notifyOnError = effect(() => {
    const err = this.pokemonResource.error() as HttpErrorResponse | null;
    if (err) {
      const detail = err.message ?? 'Une erreur est survenue.';
      this.notificationService.error('Erreur lors de la récupération des pokémons', detail);
    }
  });

  public isLoading = this.pokemonResource.isLoading;
}
