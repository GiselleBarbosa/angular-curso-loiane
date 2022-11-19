import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
//import { AlunosGuard } from './guards/alunos.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const appRoutes: Routes = [
  { path: 'cursos', 
  loadChildren: () => import('./cursos/cursos.module')
  .then(mod => mod.CursosModule),
  canActivate:[AuthGuard],
  canActivateChild: [CursosGuard], 
  canLoad:[AuthGuard]
},
  
  { path: 'alunos', 
    loadChildren: () => import('./alunos/alunos.module')
    .then(mod => mod.AlunosModule),
    canActivate:[AuthGuard], 
    //canActivateChild: [AlunosGuard]
    canLoad:[AuthGuard]
  },

  // { path: 'cursos/:id', component: CursoDetalheComponent },
  { path: 'login', 
  component: LoginComponent },

  // { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
  { path: '', 
  component: HomeComponent,
  canActivate:[AuthGuard] 
}, 
{ path:'' , redirectTo: '/home', pathMatch: 'full' },
{ path: '**', component: PaginaNaoEncontradaComponent} // path: '**', component: PaginaNaoEncontradaComponent, canActivate: [AuthGuard]}//Voltar para o login
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
