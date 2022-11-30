import { Component, OnInit, OnDestroy } from '@angular/core';
import { EnviarValorService } from '../enviar-valor.service';
import { tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-poc-unsub',
  template: `
    <app-poc-base [nome]="nome"
      [valor]="valor" estilo="bg-secondary">
    </app-poc-base>
  `
})
export class PocUnsubComponent implements OnInit, OnDestroy {
/*
Metodo que pode ser usando quando houver mais de uma inscrição dentro do componente*/
  nome = 'Componente com unsubscribe';
  valor!: string;

  sub: Subscription[] = [];

  constructor(private service: EnviarValorService) { }
 
  ngOnInit() {

    this.sub.push(this.service.getValor()
    .pipe(tap (v => console.log(this.nome, v)))
    .subscribe( novoValor => this.valor = novoValor))
  }

  ngOnDestroy() {

    this.sub.forEach(s => s.unsubscribe())

    console.log(`${this.nome} foi destruido`)
  }
}

/*
Apenas uma inscrição dentro do componente

  nome = 'Componente com unsubscribe';
  valor!: string;

  sub!: Subscription;

  constructor(private service: EnviarValorService) { }
 
  ngOnInit() {
    this.sub = this.service.getValor()
    .pipe(tap (v => console.log(this.nome, v)))
    .subscribe( novoValor => this.valor = novoValor)
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    console.log(`${this.nome} foi destruido`);
  }
}
*/