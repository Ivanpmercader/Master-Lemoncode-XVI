import { CharacterEntityApi, CharacterEntityApiListResponse } from './character-collection.api-model';
import { getAllCharacters, getFilterCharacters } from '#core/graphql/queries';
import { graphql } from '#core/graphql';

interface GetAllCharactersResponse {
  characters: CharacterEntityApiListResponse;
}


export const getCharacterCollection = async (): Promise<CharacterEntityApiListResponse> => {
  const { default: query } = getAllCharacters;
  const { characters } = await graphql<GetAllCharactersResponse>({
    query,
  });
  return characters;
}

export const getFilteredCharacterCollection = async(page?: number, text?: string): Promise<CharacterEntityApiListResponse> => {

  const { default: query } = getFilterCharacters;

  const { characters } = await graphql<GetAllCharactersResponse>({
    query,
    variables: { page, filter: { name: text }}
  });
  console.log("hotelcollectionapifiltered", characters);
  return characters;
}

export const deleteCharacter = async (id: string): Promise<boolean> => {
  // characterCollection = characterCollection.filter((h) => h.id !== id);
  return true;
};
