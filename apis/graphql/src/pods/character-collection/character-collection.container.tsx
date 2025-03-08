import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from '#core/router';
import { deleteCharacter } from './api';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import { useDebounce } from 'use-debounce';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } = useCharacterCollection();
  const [ currentPage, setCurrentPage ] = React.useState<number>(1);  
  const [ filter, setfilter] = React.useState<string>(''); 
  const [ debouncedFilter ] = useDebounce(filter, 500);


  const navigate = useNavigate();

  React.useEffect(() => {
    loadCharacterCollection();
    console.log("containeruseeffect", characterCollection);
  }, []);

  React.useEffect(() => {
    loadCharacterCollection(1, filter);
  }, [debouncedFilter]);

  const handleCreateCharacter = () => {
    navigate(linkRoutes.createCharacter);
  };

  const handleEdit = (id: string) => {
    navigate(linkRoutes.editCharacter(id));
  };

  const handleDelete = async (id: string) => {
    await deleteCharacter(id);
    loadCharacterCollection();
  };

  const handleChangePage = async (event: React.ChangeEvent<unknown>, page: number) => {
    loadCharacterCollection(page, filter);
  }

  console.log("containermount", characterCollection);
  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      onCreateCharacter={handleCreateCharacter}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onChangePage={handleChangePage}
      filter={filter}
      setFilter={setfilter}
    />
  );
};
