import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { RickMortyCharacterDialog } from '../../models/RickMorty/RickMortyCharacterDialog';
import { RickMortyInfoCharacter } from '../../models/RickMorty/RickMortyInfoCharacter';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-characterr-dialog',
  standalone: true,
  imports: [MatButtonModule, MatInputModule, FormsModule, ReactiveFormsModule, MatDialogModule ],
  templateUrl: './character-dialog.component.html',
  styleUrl: './character-dialog.component.scss'
})
export class CharacterDialogComponent {

  update: boolean = false;
  updateString: string = "Update character"
  addString: string = "Add character"
  character!: RickMortyInfoCharacter;
  result!: RickMortyCharacterDialog;

  constructor(
    public dialogRef: MatDialogRef<CharacterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RickMortyCharacterDialog) {
      if (data.update){
        this.update = data.update;
        this.setCharacterToUpdate(data.character);
      }else
        this.setEmptyCharacter();
    }

  onCancel(): void {
    this.dialogRef.close();
  }

  setEmptyCharacter(){
    this.character = {
      id: null,
      name: '',
      species: '',
      gender: '',
      image: 'default.png',
    }
  }

  setCharacterToUpdate = (characterToUpdate: RickMortyInfoCharacter) => this.character = {...characterToUpdate};

  setDataResult(){
    this.result = {
      update: this.update,
      character: {...this.character}
    }
    return this.result;
  }
}
