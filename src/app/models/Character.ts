import {Actor} from "./actor";
import {Movie} from "./movie";

export interface Character {
  id: number;
  name: string;
  gender: number;
  order: number;
  profilePath: string;
  actor_id: Actor['id'];
  movie_id: Movie['id'];
}
