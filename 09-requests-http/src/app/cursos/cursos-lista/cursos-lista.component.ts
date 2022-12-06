import { Component, OnInit, ViewChild } from '@angular/core';
// import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { catchError, Observable, of, Subject, EMPTY } from 'rxjs';
// import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';
import { Curso } from './curso';
import { CursosService } from './cursos.service';
import { AlertModalService } from '../../shared/alert-modal.service';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { take, switchMap } from 'rxjs/operators';
import { Cursos2Service } from 'src/app/shared/cursos2.service';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent implements OnInit {

  // cursos!: Curso[]

  //bsModalRef?: BsModalRef;

  deleteModalRef!: BsModalRef;
  @ViewChild('deleteModal', { static: true }) deleteModal: any;

  cursos$?: Observable<Curso[]>
  error$ = new Subject<boolean>();

  cursoSelecionado!: Curso;

  constructor(
    private service: Cursos2Service,
    private alertService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute,
    // private modalService: BsModalService
  ) { }

  // private modalService: BsModalService // private modalService: BsModalService

  ngOnInit(): void {
    this.onRefresh();
  }

  onRefresh() {
    this.cursos$ = this.service.list()
      .pipe(
        catchError(error => {
          console.error(error);
          // this.error$.next(true);
          this.handleError();
          return EMPTY;
        })
      );

    /*   this.service.list()
      .pipe(
        catchError(error => of())
      )
      .subscribe(
        dados => {
          console.log(dados);
        }/* ,
        error => console.error(error),
        () => console.log('Observable completo!')
      );    */
  }

  handleError() {
    this.alertService.showAlertDanger('Erro ao carregar cursos. Tente novamente mais tarde.')
    // this.bsModalRef = this.modalService.show(AlertModalComponent);
    // this.bsModalRef.content.type = 'danger';
    // this.bsModalRef.content.message = 'Erro ao carregar cursos. Tente novamente mais tarde.';
  }

  onEdit(id: any) {
    this.router.navigate(['editar', id], { relativeTo: this.route })
  }

  onDelete(curso: any) {
    this.cursoSelecionado = curso;
    // this.deleteModalRef = this.modalService.show(this.deleteModal, { class: 'modal-sm' })

    const result$ = this.alertService.showConfirm('Confirmacao', 'Tem certeza que deseja remover este curso?','Sim')
    result$.asObservable()
    .pipe(
      take(1),
      switchMap(result => result ? this.service.remove(curso.id) : EMPTY)
    )
    .subscribe(
      success => {
        this.onRefresh();
       
      },
      error => {
        this.alertService.showAlertDanger('Erro ao tentar remover curso. Tente novamente mais tarde.');
      } 
    );
  }

  onConfirmDelete() {
    this.service.remove(this.cursoSelecionado.id)
    .subscribe(
      success => {
        this.onRefresh();
        this.deleteModalRef?.hide();
      },
      error => {
        this.alertService.showAlertDanger('Erro ao tentar remover curso. Tente novamente mais tarde.');
        this.deleteModalRef?.hide();
      } 
    )
  }

  onDeclineDelete() {
    this.deleteModalRef?.hide();
  }
}

