import { Component, OnInit } from '@angular/core';
// import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { catchError, Observable, of, Subject } from 'rxjs';
// import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';
import { Curso } from './curso';
import { CursosService } from './cursos.service';
import { AlertModalService } from '../../shared/alert-modal.service';
import { ActivatedRoute, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent implements OnInit {

  // cursos!: Curso[]

  //bsModalRef?: BsModalRef;
  
  cursos$?: Observable<Curso[]>
  error$ = new Subject<boolean>();

  constructor(
    private service: CursosService,
    private alertService: AlertModalService,
    private router: Router, 
    private route: ActivatedRoute
    ){ }

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
          return of();
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

  handleError(){
    this.alertService.showAlertDanger('Erro ao carregar cursos. Tente novamente mais tarde.')
    // this.bsModalRef = this.modalService.show(AlertModalComponent);
    // this.bsModalRef.content.type = 'danger';
    // this.bsModalRef.content.message = 'Erro ao carregar cursos. Tente novamente mais tarde.';
  }

  onEdit(id: any){
this.router.navigate(['editar', id], { relativeTo : this.route})
  }
}

