import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {

  @Input() title: string ='';
  @Input() msg: string ='';
  @Input() cancelTxt : string = 'Cancelar' ;
  @Input() okTxt: string = 'Sim';

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  onConfirm(){

  }

  onClose(){
    this.bsModalRef.hide();
  }

}
