import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibSearchComponent } from './lib-search/lib-search.component';

const routes: Routes = [
  { path: '', component: LibSearchComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveSearchRoutingModule { }
