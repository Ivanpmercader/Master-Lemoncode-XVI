import { Character } from './character.api-model';

const rickAndMortyCharactersUrl = '/api/character'

export const getCharacter = async (id: string): Promise<Character> => {
  
  const response = await fetch(`${rickAndMortyCharactersUrl}/${id}`);
  if (response.ok) {
    const character = await response.json();
    return character;
  }
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  //In this exercise not necesary implement insert
  if (character.id) {
    // Update 
    await fetch(`${rickAndMortyCharactersUrl}/${character.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(character),
    });
  }
  return true;

};
