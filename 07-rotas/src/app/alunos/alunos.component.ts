import { Component, OnInit } from '@angular/core';

import { AlunosService } from './alunos.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent implements OnInit {

  public alunos: any[] = [];

  constructor( private alunosService: AlunosService ) { }

  ngOnInit() {
    this.alunos = this.alunosService.getAlunos();

  }

}
