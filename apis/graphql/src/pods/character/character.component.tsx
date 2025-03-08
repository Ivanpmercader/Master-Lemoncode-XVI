import React from 'react';
import { Formik, Form } from 'formik';
import Button from '@mui/material/Button';
import {
  TextFieldComponent,
  // SelectComponent,
  // RatingComponent,
} from '#common/components';
// import { Lookup } from '#common/models';
import { formValidation } from './character.validations';
import { Character } from './character.vm';
import * as classes from './character.styles';
import { Card, CardMedia } from '@mui/material';

interface Props {
  character: Character;
  // cities: Lookup[];
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  // const { character, cities, onSave } = props;
  const { character, onSave } = props;
  const [ picture, setPicture ] = React.useState<string>('');

  React.useEffect(()=> {
    setPicture(character.picture);
  }, [character.picture]);

  const handleOnBlur = (event) => {
    setPicture(event.target.value);
  }

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="200"
          image={picture}
          alt={character.name}
        />
      </Card>
      <Formik
        onSubmit={onSave}
        initialValues={character}
        enableReinitialize={true}
        validate={formValidation.validateForm}
      >
        {() => (
          <Form className={classes.root}>
            <TextFieldComponent name="name" label="Name" />
            <TextFieldComponent name="status" label="Status" />
            <TextFieldComponent name="species" label="Species" />
            <TextFieldComponent name="gender" label="Gender" />
            <TextFieldComponent name="picture" label="Picture Url" onBlur={handleOnBlur} />
            {/* <SelectComponent name="city" label="City" items={cities} /> */}
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};
