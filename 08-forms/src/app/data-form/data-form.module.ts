import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataFormComponent } from './data-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    SharedModule,
    HttpClientModule,
    MatCheckboxModule, 
    FormsModule
  ],
  declarations: [
    DataFormComponent
  ],

})
export class DataFormModule { }
