import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'form-debug',
  templateUrl: './form-debug.component.html',
  styleUrls: ['./form-debug.component.scss']
})
export class FormDebugComponent implements OnInit {

  @Input() form: any;

  constructor() { }

  ngOnInit(): void {
  }

}
