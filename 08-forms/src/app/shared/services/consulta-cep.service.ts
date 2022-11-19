import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(
    private http: HttpClient
  ) { }

  consultaCEP(cep: string) {
    //Nova variavel "cep" somente com digitos.
    cep = cep.replace(/\D/g, '');

    // Expressão regular para valida o CEP.
    if (cep !== '') {
      const validacep = /^[0-9]{8}$/;

      // Valida o formato do CEP.
      if (validacep.test(cep)) {
        return this.http.get(`//viacep.com.br/ws/${cep}/json`)
      }
    }

    return  of({})

  }
}
