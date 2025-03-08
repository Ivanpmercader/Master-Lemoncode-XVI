import * as React from 'react';
import { CharacterEntityVm, CharacterEntityListVm } from './character-collection.vm';
import { getCharacterCollection, getFilteredCharacterCollection } from './api';
import { mapFromApiToVm, mapFromCharacterInfoApiToCharacterInfoVm } from './character-collection.mapper';
import { mapToCollection } from '#common/mappers';


export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<CharacterEntityListVm>(
    {} as CharacterEntityListVm
  );

  const loadCharacterCollection = async (page?: number, filter?: string) => {
    let data; 

    if (page || filter){
        data = await getFilteredCharacterCollection(page, filter); 
    }else {
        data = await getCharacterCollection();
    }

    const characterCollection = {
      info: mapFromCharacterInfoApiToCharacterInfoVm(data.info),
      results: mapToCollection(data.results, mapFromApiToVm)
    }

    setCharacterCollection(characterCollection);

  };

  return { characterCollection, loadCharacterCollection };
};