import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appErrorMsg]'
})
export class ErrorMsgDirective implements OnInit{

  htmlElement: ElementRef<HTMLElement>;
  @Input() color = 'red';
  @Input() mensaje = 'Este campo es requerido';

  constructor( private el: ElementRef<HTMLElement> ) {

    this.htmlElement = el;

   }

  ngOnInit(): void {

    this.setColor();
    this.setMensaje();
    this.setClase();

  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this.color;
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this.mensaje;
  }

  setClase(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

}
