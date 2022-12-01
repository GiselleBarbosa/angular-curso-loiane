import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.css']
})
export class CursosFormComponent implements OnInit {

  formulario!: FormGroup;
  submitted: boolean = true

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]]
    });
  }

  hasError(field: string){
    return this.formulario.get(field)?.errors
  }

  onSubmit() {
    console.log(this.formulario.value);
    if (this.formulario.valid) {
      console.log('Submit')
    }
  }

  onCancel() {
    this.submitted = false;
    this.formulario.reset()
          console.log('Cancel')

  }
}
