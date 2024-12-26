import { Routes } from '@angular/router';
import { EnvFormComponent } from './components/env-form/env-form.component';

export const routes: Routes = [
    {
        path: 'EBS',
        component: EnvFormComponent
    },
    {
        path: 'CLOUD',
        component: EnvFormComponent
    },
    {
        path: '**',
        redirectTo: 'EBS'
    },

];
