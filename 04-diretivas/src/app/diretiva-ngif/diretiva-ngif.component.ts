import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.scss']
})
export class DiretivaNgifComponent implements OnInit {

  cursos: string[] = ["angular2"];

  mostrarCursos: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  
  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos
  }

}
