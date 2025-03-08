import * as React from 'react';
import Button from '@mui/material/Button';
import { CharacterEntityListVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';
import { Box, Pagination, TextField } from '@mui/material';

interface Props {
  characterCollection: CharacterEntityListVm;
  onCreateCharacter: () => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onChangePage: (event: React.ChangeEvent<unknown>, page: number) => void,
  filter: string,
  setFilter: React.Dispatch<React.SetStateAction<string>>
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection: { info, results: characterCollection }, 
  onCreateCharacter, 
  onEdit, 
  onDelete, 
  onChangePage, 
  filter,
  setFilter } = props;

  return (
    <div className={classes.root}>
      <Box  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
        <Button variant="contained" color="primary" onClick={onCreateCharacter}>
          Add character
        </Button>
        <TextField id="search" label="Search" placeholder={filter} value={filter}
              onChange={(e) => setFilter(e.target.value)}/>
      </Box>
      <ul className={classes.list}>
        {characterCollection && characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} onEdit={onEdit} onDelete={onDelete} />
          </li>
        ))}
      </ul>
      {info && <Pagination count={info.pages} color="primary" variant="outlined" shape="rounded" onChange={onChangePage} />}
    </div>
  );
};
