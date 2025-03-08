export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  picture: string;
}

export const createEmptyCharacter = (): Character => ({
  id: '',
  name: '',
  status: '',
  species: '',
  gender: '',
  picture: ''
});
