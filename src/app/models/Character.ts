import {Actor} from "./actor";
import {Movie} from "./movie";

export interface Character {
  id: number;
  name: string;
  gender: number;
  order: number;
  profilePath: string;
  actor: Actor;
  movie: Movie;
}

export interface CharacterCreateDTO {
  name: string;
  profilePath: string;
  actorId: number;
  movieId: number;
  gender: number;
  order: number;
}

export interface CharacterUpdateDTO {
  id: number;
  name: string;
  profilePath: string;
  actorId: number;
  gender: number;
  order: number;
}