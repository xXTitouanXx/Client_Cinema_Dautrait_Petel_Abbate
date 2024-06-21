export interface Movie {
  runtime: number;
  id: number;
  title: string;
  popularity: number;
  budget?: number;
  revenue?: number;
  //director wip
  backdropPath: string;
  overview: string;
  originalTitle: string;
  releaseDate: Date;
  posterPath: string;
  originalLanguage: string;
}
