import { RickMortyInfoCharacter } from "./RickMortyInfoCharacter";
import { RickMortyInfoPages } from "./RickMortyInfoPages";


export interface RickMortyCharacter{
  info: RickMortyInfoPages;
  results: RickMortyInfoCharacter[];
}
