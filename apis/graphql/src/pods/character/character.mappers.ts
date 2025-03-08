import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  ...character,
  id: String(character.id),
  name: character.name,
  status: character.status,
  species: character.species,
  gender: character.gender,
  picture: character.image,
});

export const mapCharacterFromVmToApi = (character: viewModel.Character): apiModel.Character =>
  (({
    ...character,
    id: Number(character.id),
    name: character.name,
    status: character.status,
    species: character.species,
    gender: character.gender,
    image: character.picture,
  } as unknown) as apiModel.Character);
