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
    this._color = valor;
    this.setColor();
  }

  @Input() set valido(valor: boolean) {
    if ( valor ) {
      this.htmlElement.nativeElement.classList.add('hidden');
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }

  // @Input() mensaje = 'Este campo es requerido';

  @Input() set mensaje(texto: string) {
    this._mensaje = texto;
    this.setMensaje();
  }

  constructor( private el: ElementRef<HTMLElement> ) {

    this.htmlElement = el;

   }



  ngOnInit(): void {

    this.setColor();
    this.setMensaje();
    this.setClase();

  }

   setColor(): void {
     this.htmlElement.nativeElement.style.color = this._color;
   }

   setMensaje(): void {
     this.htmlElement.nativeElement.innerText = this._mensaje;
   }

   setClase(): void {
     this.htmlElement.nativeElement.classList.add('form-text');
   }

}
