import { environment } from '../../../../../environments/environment';

export class PokemonsRoutes {
  private readonly baseUrl = `${environment.apiUrl}`;

  constructor() {}

  public getAllUrl(limit: number, offset: number): string {
    return `${this.baseUrl}pokemon?limit=${limit}&offset=${offset}`;
  }

  public getByIdUrl(id: number): string {
    return `${this.baseUrl}pokemon/${id}`;
  }

  public getByNameUrl(name: string): string {
    return `${this.baseUrl}pokemon/${name}`;
  }
}
