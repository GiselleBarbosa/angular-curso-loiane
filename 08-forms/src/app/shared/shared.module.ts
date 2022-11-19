import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { DropdownService } from './services/dropdown.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule, 
    HttpClientModule
  ],
  declarations: [
    FormDebugComponent,
    CampoControlErroComponent
  ], 
  exports: [
    FormDebugComponent,
    CampoControlErroComponent
  ],
  providers:[ DropdownService ]
})
export class SharedModule { }
