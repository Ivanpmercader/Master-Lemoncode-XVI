import { Component } from '@angular/core';
import { RickMortyInfoCharacter } from '../../models/RickMorty/RickMortyInfoCharacter';
import { CharacterDialogComponent } from '../../components/character-dialog/character-dialog.component';
import { CharactersService } from '../../services/characters.service';
import { MatDialog } from '@angular/material/dialog';
import { RickMortyCharacterDialog } from '../../models/RickMorty/RickMortyCharacterDialog';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss'
})
export class CrudComponent {
  characters: RickMortyInfoCharacter[] = [];


  constructor(private _charactersService: CharactersService, public dialog: MatDialog) {
    this._charactersService.getAll().subscribe((characters: RickMortyInfoCharacter[]) => {
      this.characters = characters});
   }

  openDialog(character?: RickMortyInfoCharacter): void {
    const dialogRef = this.dialog.open(CharacterDialogComponent, {
      data: {
        update: (typeof character !== "undefined") ? true: false,
        character: (typeof character !== "undefined") ? character: null,
      }
    });

    dialogRef.afterClosed().subscribe((result: RickMortyCharacterDialog) => {
      console.log(result);
      if (typeof result === "undefined"){
        return;
      } else if (result.update){
        this.characters=  this.characters.map(character => character.id === result.character.id ? {...result.character} : character);
      }else {
        this.characters.push({...result.character, id: this.characters.length + 1});
      }
    });
  }

  deleteMember(memberId: number | null){
    if (memberId) {
      this.characters = this.characters.filter(character => character.id !== memberId);
    }
  }

}