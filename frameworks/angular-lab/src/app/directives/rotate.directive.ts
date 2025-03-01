import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[rotatedirective]',
  standalone: true
})
export class RotateDirective{

  @Input() deg: string = '';
  @Input() step: string = "10";

  private angle: number = 0;
  private pressed: boolean = false;

  constructor (private el: ElementRef){
    this.setTransform(+this.deg);
    console.log("rotate", this.deg, this.step);
  }

  @HostListener('click', ['$event'])
  onMouseClickEvent(){
    this.angle = this.calculateAngle();
    this.setTransform(this.angle);
  }

  @HostListener('window:keydown', ['$event'])
  onKeydown($event: KeyboardEvent){
    ($event.code === 'ShiftLeft') ? this.pressed = true: this.pressed = false;
  }

  @HostListener('window:keyup')
  onKeyup(){
    this.pressed = false;
  }

  private setTransform(deg: number){
    this.el.nativeElement.style.transform = `rotate(${deg}deg)`;
  }

  private calculateAngle(){
    let computedStyle = getComputedStyle(this.el.nativeElement, null);
    let matrix = computedStyle.getPropertyValue("-webkit-transform") ||
             computedStyle.getPropertyValue("-moz-transform") ||
             computedStyle.getPropertyValue("-ms-transform") ||
             computedStyle.getPropertyValue("-o-transform") ||
             computedStyle.getPropertyValue("transform") ||
             "none";
    let values: string[];
    let calcAngle: number;
    if (matrix !== "none") {
      values = matrix.split('(')[1].split(')')[0].split(',');
      let a = +values[0];
      let b = +values[1];
      (!this.pressed) ? calcAngle = Math.round(Math.atan2(b,a) * (180/Math.PI)) + (+this.step) :
      calcAngle = Math.round(Math.atan2(b,a) * (180/Math.PI)) - (+this.step);
      return calcAngle;
    }
    return +this.step;
  }

}
