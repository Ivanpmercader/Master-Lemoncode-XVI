import { Component } from '@angular/core';
import { Animal } from '../../models/animal';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RotateDirective } from '../../directives/rotate.directive';

@Component({
  selector: 'app-galery',
  standalone: true,
  imports: [MatIconModule, CommonModule, MatButtonModule, RotateDirective],
  templateUrl: './galery.component.html',
  styleUrl: './galery.component.scss'
})
export class GaleryComponent {

  animalGalery: Animal[] = []
  selectedAnimal!: Animal;
  initPage: number = 0;
  lastPage: number = 3
  MAX_ITEMS_PAGE: number = 3;
  BASE_WIDTH: number = 500;
  INCREASE: number = 50;
  imgWidth: string = '';
  currentPosition: number = 0;
  interval!: number;

  constructor() {
    fetch("data/animals.json")
    .then(response => response.json())
    .then((animals: Animal[]) => {
      this.animalGalery = animals;
      this.selectedAnimal = this.animalGalery[0];
      this.setImgWidth(this.BASE_WIDTH);
    })
    .catch(() => this.animalGalery = []);
  }

  setImgWidth = (value: number):string => this.imgWidth = value + "px";

  selectImg(selectNewAnimal: Animal){
    this.selectedAnimal = selectNewAnimal;
    this.currentPosition = this.animalGalery.findIndex(animal => animal === this.selectedAnimal);
    this.setImgWidth(this.BASE_WIDTH);
  }

  previousPage(){
    this.initPage -= this.MAX_ITEMS_PAGE;
    this.lastPage -= this.MAX_ITEMS_PAGE;
  }

  nextPage(){
    this.initPage += this.MAX_ITEMS_PAGE;
    this.lastPage += this.MAX_ITEMS_PAGE;
  }

  increaseDecreaseBaseWidth(increase: boolean){
    let widthValue: number = +this.imgWidth.split('px')[0];
    (increase) ? widthValue += this.INCREASE : widthValue -= this.INCREASE;
    this.setImgWidth(widthValue);
  }

  previousImg = () => {
    --this.currentPosition;
    this.selectedAnimal = this.animalGalery[this.currentPosition];
    console.log("previous", this.initPage, this.currentPosition);
    if (this.initPage > this.currentPosition) this.previousPage();
  }

  nextImg = () => {
    ++this.currentPosition;
    this.selectedAnimal = this.animalGalery[this.currentPosition];
    if (this.lastPage - 1 < this.currentPosition) this.nextPage();
  }

  playGalery(){
    this.interval = window.setInterval(()=>{
      if (this.currentPosition + 1 > this.animalGalery.length - 1){
        this.currentPosition = 0;
        this.selectedAnimal = this.animalGalery[this.currentPosition];
        this.initPage = 0;
        this.lastPage = 3;
      }else {
        this.nextImg();
      }
    }, 2000)
  }

  stopGalery = () => clearInterval(this.interval);

}