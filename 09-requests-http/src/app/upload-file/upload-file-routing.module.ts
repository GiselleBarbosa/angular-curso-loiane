import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadFileComponent } from './upload-file/upload-file.component';

const routes: Routes = [
  { path:'', component: UploadFileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadFileRoutingModule { }
