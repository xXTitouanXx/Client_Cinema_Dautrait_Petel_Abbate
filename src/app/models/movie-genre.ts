import {Movie} from "./movie";
import {Genre} from "./genre";

export interface MovieGenre {
  movie_id: Movie['id'];
  genre_id: Genre['id'];
}
