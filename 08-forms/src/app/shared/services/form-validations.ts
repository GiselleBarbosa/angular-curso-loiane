import { AbstractControl, FormArray, FormControl, FormGroup, ValidatorFn } from '@angular/forms';

export class FormValidations {
  static requiredMinCheckbox(min = 1) {
    return (formArray: AbstractControl) => {
      const totalChecked = (<FormArray>formArray).controls.filter(v => v.value).length;
      return totalChecked >= min ? null : { required: true };
    }

  }
  static cepValidator(control: FormControl) {

    const cep = control.value;
    if (cep && cep !== '') {
      const validacep = /^[0-9]{8}$/;
      return validacep.test(cep) ? null : { cepInvalido: true }

    }
    return null
  }

  static equalsTo(otherField: string){
    const validator: ValidatorFn = (formControl: AbstractControl) => {
        if (formControl instanceof FormControl) {
            if (otherField == null){
                throw new Error('É necessário informar um campo.');
            }
            // Colocamos essa validação abaixo para sabermos se o Angular já preparou esses
            // componentes na renderização. Muitas vezes o objeto vem null por esse motivo,
            // ou seja, as vezes o Angular precisa de um tempinho a mais.
            if (!formControl.root || !(<FormGroup>formControl.root).controls){
                return null;
            }
            // Também poderíamos utilizar a propriedade .parent do formControl,
            // porém, para garantir, vamos utilziar a root (raiz).
            const field = (<FormGroup>formControl.root).get(otherField);

            if (!field){
                throw new Error('É necessário informar um campo válido.');
            }

            if (field.value !== formControl.value){
                // Aqui a validação propriamente feita, onde se não forem iguais, retornamos um erro.
                // Precisamos retornar um objeto com a propriedade de erro com seu nome, no caso
                // usamos o nome sendo equalsTo.
                return { equalsTo: otherField };
            }

            return null;
        }
        throw new Error('formControl não é uma instância de FormControl');
    };
    return validator;
}
}