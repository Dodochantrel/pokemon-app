export interface PaginatedResponseDto<T> {
  results: T[];
  meta: PaginatedMetaDto;
}
export interface PaginatedMetaDto {
  count: number;
  next: string | null;
  previous: string | null;
}
