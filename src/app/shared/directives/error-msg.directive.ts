import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appErrorMsg]'
})
export class ErrorMsgDirective implements OnInit{

  // tslint:disable-next-line: variable-name
  private _color = 'red';

  // tslint:disable-next-line: variable-name
  private _mensaje = 'Este campo es requerido';

  htmlElement: ElementRef<HTMLElement>;

  @Input() set color(valor: string) {
    this.htmlElement.nativeElement.style.color = valor;
    this._color = valor;
  }

  // @Input() mensaje = 'Este campo es requerido';

  @Input() set mensaje(texto: string) {
    this.htmlElement.nativeElement.innerText = texto;
    this._mensaje = texto;
  }

  constructor( private el: ElementRef<HTMLElement> ) {

    this.htmlElement = el;

   }



  ngOnInit(): void {

    this.htmlElement.nativeElement.classList.add('form-text');

    // this.setColor();
    // this.setMensaje();
    // this.setClase();

  }

  // setColor(): void {
  //   this.htmlElement.nativeElement.style.color = this._color;
  // }

  // setMensaje(): void {
  //   this.htmlElement.nativeElement.innerText = this._mensaje;
  // }

  // setClase(): void {
  //   this.htmlElement.nativeElement.classList.add('form-text');
  // }

}
