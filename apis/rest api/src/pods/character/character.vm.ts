export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  picture: string;
  bestSentence?: string
}

export const createEmptyCharacter = (): Character => ({
  id: '',
  name: '',
  status: '',
  species: '',
  gender: '',
  picture: '',
  bestSentence: ''
});
