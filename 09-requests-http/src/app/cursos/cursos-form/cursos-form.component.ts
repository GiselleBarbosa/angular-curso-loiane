import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CursosService } from '../cursos-lista/cursos.service';
import { AlertModalService } from '../../shared/alert-modal.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// import { map, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.css']
})
export class CursosFormComponent implements OnInit {

  formulario!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: CursosService,
    private modal: AlertModalService,
    private location: Location,
    private route: ActivatedRoute) { }

  ngOnInit() {

    // const registro = null;

    // this.route.params.subscribe(
    //   (params: any) => {
    //     const id = params['id'];
    //     console.log(id);
    //     const curso$ = this.service.loadByID(id);
    //     curso$.subscribe(curso => {
    //       registro = curso;
    //       this.updateForm(curso);
    //     });
    //   }
    // );

    // console.log(registro);

    // this.route.params
    // .pipe(
    //   map((params: any) => params['id']),
    //   switchMap(id => this.service.loadByID(id)),
    //   // switchMap(cursos => obterAulas)
    // )
    // .subscribe(curso => this.updateForm(curso));

    // concatMap -> ordem da requisiçao importa
    // mergeMap -> ordem nao importa
    // exhaustMap -> usado por exemplo em casos de login, onde se espera a resposta para ir para a proxima requisição

    const curso = this.route.snapshot.data['curso'];

    this.formulario = this.formBuilder.group({
      id: [curso.id],
      nome: [curso.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    });
  }

  // updateForm(curso) {
  //   this.form.patchValue({
  //     id: curso.id,
  //     nome: curso.nome
  //   });
  // }

  hasError(field: string) {
    return this.formulario.get(field)?.errors;
  }

  onSubmit() {
    console.log(this.formulario.value);
    if (this.formulario.valid) {
      console.log('Submit');

      let messageSuccess = 'Curso criado com sucesso.';
      let messageError = 'Erro ao criar curso, tente novamente.';
      if (this.formulario.value.id) {
        messageSuccess = 'Curso atualizado com sucesso.';
        messageError = 'Erro ao atualizar curso, tente novamente.';
      }

      this.service.save(this.formulario.value).subscribe(
        success => {
          this.modal.showAlertSuccess(messageSuccess);
          this.location.back();
        },
        error => this.modal.showAlertDanger(messageError),
      )
    }

      /* if (this.form.value.id) {
        // update
        this.service.update(this.form.value).subscribe(
          success => {
            this.modal.showAlertSuccess('Curso atualizado com sucesso!');
            this.location.back();
          },
          error => this.modal.showAlertDanger('Erro ao atualizar curso, tente novamente!'),
          () => console.log('update completo')
        );
      } else {
        this.service.create(this.form.value).subscribe(
          success => {
            this.modal.showAlertSuccess('Curso criado com sucesso!');
            this.location.back();
          },
          error => this.modal.showAlertDanger('Erro ao criar curso, tente novamente!'),
          () => console.log('request completo')
        );
      } */
    
  }

  onCancel() {
    this.submitted = false;
    this.formulario.reset();
    // console.log('onCancel');
  }
}