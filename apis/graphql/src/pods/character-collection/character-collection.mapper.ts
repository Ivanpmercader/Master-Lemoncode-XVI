import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (
  character: apiModel.CharacterEntityApi
): viewModel.CharacterEntityVm => ({
  id: String(character.id),
  picture:character.image,
  name: character.name,
  status: character.status,
  species: character.species,
  gender: character.gender,
});

export const mapFromCharacterInfoApiToCharacterInfoVm = (
  characterListInfo: apiModel.CharacterInfoListEntityApi
): viewModel.CharacterInfoListVm => ({
  count: characterListInfo.count,
  pages: characterListInfo.pages,
  next: characterListInfo.next,
  prev: characterListInfo.prev
});
