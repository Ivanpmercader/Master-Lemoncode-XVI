import { CharacterEntityApi } from './character-collection.api-model';

const rickAndMortyCharactersUrl = '/api/character';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
    const response = await fetch(rickAndMortyCharactersUrl);
    if (response.ok) {
      const { results: characters } = await response.json();
      return characters;
    }
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  // characterCollection = characterCollection.filter((h) => h.id !== id);
  return true;
};
