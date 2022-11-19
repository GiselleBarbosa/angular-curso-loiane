import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'; 
import { EstadoBr } from '../models/estado-br';

@Injectable({
  providedIn: 'root'
})

export class DropdownService {

  constructor(
    private _http: HttpClient
  ) { }
 
  getEstadosBr() {
    return this._http.get<EstadoBr[]>('assets/dados/estadosbr.json');
  }

  getCadastro(){
    return [
      { nome: 'Dev', nivel: 'Junior', desc: 'Dev Jr'},
      { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl'},
      { nome: 'Dev', nivel: 'Senior', desc: 'Dev Sr'},
    ]
  }

  getTecnologias() {
    return [
      { nome: 'java', desc: 'Java' },
      { nome: 'javascript', desc: 'Javascript' },
      { nome: 'php', desc: 'Php' },
      { nome: 'ruby', desc: 'Ruby' }
    ]
  }
  
  getNewsletter() {
    return [
      { valor: 's', desc: 'Sim' },
      { valor: 'n', desc: 'Não' },
    ]
  }
}