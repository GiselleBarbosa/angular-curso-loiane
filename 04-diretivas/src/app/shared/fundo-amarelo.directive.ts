import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  /* selector: 'p[fundoAmarelo]' desta forma foi aplicado apenas as tags p*/
  selector: '[fundoAmarelo]' /* desta forma foi aplicado apenas as tags p*/
})
export class FundoAmareloDirective {

  constructor(
    private _ElementRef: ElementRef, 
    private _renderer: Renderer2) {
      // console.log(this._ElementRef);      
      // this._ElementRef.nativeElement.style.backgroundColor = 'yellow';
    this._renderer.setStyle(
      this._ElementRef.nativeElement,
      'background-color',
      'yellow'
      )
  }
}
