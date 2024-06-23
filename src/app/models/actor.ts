import {Character} from "./Character";
import {Movie} from "./movie";

export interface Actor {
  id: number
  gender: number
  name: string
  birthday: string
  deathday: string
  placeOfBirth: string
  profilePath: string
  biography: string
  popularity: number
  characters : Character[]
  movies: Movie[]
}
