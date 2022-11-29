import { Routes, RouterModule } from '@angular/router';
import { UnsubscribePocComponent } from './unsubscribe-poc/unsubscribe-poc.component';

const routes: Routes = [
  { 
    path: '', component: UnsubscribePocComponent
   },
];

export const UnsubscribeRxjsRoutingRoutes = RouterModule.forChild(routes);
