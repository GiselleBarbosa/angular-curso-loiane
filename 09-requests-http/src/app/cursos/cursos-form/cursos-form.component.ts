import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CursosService } from '../cursos-lista/cursos.service';
import { AlertModalService } from '../../shared/alert-modal.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.css']
})
export class CursosFormComponent implements OnInit {

  formulario!: FormGroup;
  submitted: boolean = true

  constructor(
    private formBuilder: FormBuilder,  
    private service: CursosService,
    private modal: AlertModalService,
    private location: Location) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(45)]]
    });
  }

  hasError(field: string){
    return this.formulario.get(field)?.errors
  }

  onSubmit() {
    console.log(this.formulario.value);
    if (this.formulario.valid) {
      console.log('Submit');
      this.service.create(this.formulario.value)
      .subscribe(
        success => {
          this.modal.showAlertSuccess('Criado com sucesso.');
          this.location.back();
        },
        error => this.modal.showAlertDanger('Erro ao criar curso, tente novamente.'),
        () => console.log('Request completa')
      )
    }
  }

  onCancel() {
    this.submitted = false;
    this.formulario.reset()
          console.log('Cancel')

  }
}
