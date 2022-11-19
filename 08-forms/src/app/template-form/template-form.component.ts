import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'
import { ConsultaCepService } from '../shared/services/consulta-cep.service';

@Component({
  selector: 'template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  }

  onSubmit(formulario: any) {
    console.log(formulario);

    //form.value
    // console.log(this.usuario);

    this.http.post('https://httpbin.org/post', JSON.stringify(formulario.value))
      .pipe(map((dados: any) => dados))
      .subscribe(dados => {
        console.log(dados)
      },
        formulario.form.reset()
      )
  }

  constructor(private http: HttpClient,
    private cepService: ConsultaCepService) { }

  ngOnInit(): void {
  }

  verificaValidTouched(campo: any) {
    return !campo.valid && campo.touched
  }

  aplicaCssErro(campo: any) {
    return {
      'is-invalid': this.verificaValidTouched(campo)
    }
  }

  consultaCEP(cep: any, form: any) {
    //Nova variavel "cep" somente com digitos.
    cep = cep.replace(/\D/g, '');

    if (cep != null && cep !== '') {
      this.cepService.consultaCEP(cep)
        .subscribe((dados: any) => this.populaDadosForm(dados, form));
    }
  }

  populaDadosForm(dados: any, formulario: any) {
    /*  formulario.setValue({
       nome: formulario.value.nome,
       email: formulario.value.email,
       endereco: {
         rua: dados.logradouro,
         cep: dados.cep,
         complemento: dados.complemento,
         bairro: dados.bairro,
         cidade: dados.localidade,
         estado: dados.uf
       }
     }) */

    formulario.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        //cep: dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf,
      }
    })
  }
  resetaDadosForm(formulario: any) {
    formulario.form.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null,
      }
    })
  }
}
