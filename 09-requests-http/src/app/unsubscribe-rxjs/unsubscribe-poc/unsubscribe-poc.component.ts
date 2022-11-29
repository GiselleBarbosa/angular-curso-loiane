import { Component, OnInit } from '@angular/core';
import { EnviarValorService } from '../enviar-valor.service';

@Component({
  selector: 'app-unsubscribe-poc',
  templateUrl: './unsubscribe-poc.component.html',
  styleUrls: ['./unsubscribe-poc.component.css']
})
export class UnsubscribePocComponent implements OnInit {

  mostrarComponentes = true;

  constructor(private service: EnviarValorService) { }

  ngOnInit() {
  }

  emitirValor(valor: string) {

  }

  destruirComponentes() {
    this.mostrarComponentes = !this.mostrarComponentes;
  }

}