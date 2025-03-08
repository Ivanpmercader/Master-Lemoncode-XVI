import { Character } from './character.api-model';
import { geCharacterById } from '#core/graphql/queries';
import { graphql } from '#core/graphql';

// const rickAndMortyCharactersUrl = '/api/character';

interface GetCharacterByIdResponse {
  character: Character
}

export const getCharacter = async (id: string): Promise<Character> => {
      const { default: query } = geCharacterById;
      const { character } = await graphql<GetCharacterByIdResponse>({
        query,
        variables: { id } 
      });
      return character;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  //In this exercise not necesary implement insert
  // if (character.id) {
  //   // Update 
  //   await fetch(`${rickAndMortyCharactersUrl}/${character.id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(character),
  //   });
  // }
  return true;

};
