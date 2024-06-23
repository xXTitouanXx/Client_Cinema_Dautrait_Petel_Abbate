import {Director} from "./director";
import {Character} from "./Character";
import {Genre} from "./genre";
export interface Movie {
  runtime: number;
  id: number;
  title: string;
  popularity: number;
  budget?: number;
  revenue?: number;
  director: Director;
  backdropPath: string;
  overview: string;
  originalTitle: string;
  releaseDate: Date;
  posterPath: string;
  originalLanguage: string;

  characters: Character[];
  genres: Genre[];
}
