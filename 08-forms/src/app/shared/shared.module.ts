import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { DropdownService } from './services/dropdown.service';
import { HttpClientModule } from '@angular/common/http';
import { ErrorMsgComponent } from './error-msg/error-msg.component';


@NgModule({
  imports: [
    CommonModule, 
    HttpClientModule
  ],
  declarations: [
    FormDebugComponent,
    CampoControlErroComponent,
    ErrorMsgComponent
  ], 
  exports: [
    FormDebugComponent,
    CampoControlErroComponent, 
    ErrorMsgComponent
  ],
  providers:[ DropdownService ]
})
export class SharedModule { }
