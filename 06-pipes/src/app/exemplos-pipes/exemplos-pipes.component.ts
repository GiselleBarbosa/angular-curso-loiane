import { Component, OnInit } from '@angular/core';
 import { interval, Observable } from 'rxjs';
 import { map } from 'rxjs/operators';

@Component({
  selector: 'exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: "Estruturas de Dados e Algoritmos com JavaScript",
    rating: 4.95222,
    numeroPaginas: 408,
    preco: 56.76,
    dataLancamento: new Date(2019, 19, 3),
    url: 'https://www.amazon.com.br/Estruturas-Dados-Algoritmos-Com-Javascript/dp/8575226932/ref=sr_1_1?keywords=loiane+groner&qid=1665082072&qu=eyJxc2MiOiIxLjUwIiwicXNhIjoiMC41MyIsInFzcCI6IjAuMjgifQ%3D%3D&sprefix=loiane+%2Caps%2C227&sr=8-1'
  };

  livros: string[] = ['java', 'Angular 2'];

  filtro: string | any;

  addCurso(valor: string) {
    this.livros.push(valor);
    console.log(this.livros);
  }

  obterCursos() {

    if (this.livros.length === 0 || this.filtro === undefined
      || this.filtro.trim() === '') {
      return this.livros;
    }

    return this.livros.filter((v) => {
      if (v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor Assíncrono'), 5000)
  });

  valorAsync2 = interval(5000).pipe(map(valor => 'Valor assíncrono 2'));
  constructor() { }

  ngOnInit(): void {
  }


}
