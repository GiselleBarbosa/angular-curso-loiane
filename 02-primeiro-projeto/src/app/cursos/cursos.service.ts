import { Injectable } from '@angular/core';

@Injectable()

  export class CursosService {


    constructor() { }

    getCursos() {
      return ['java', 'Ext Js', 'Angular']
    }
}
