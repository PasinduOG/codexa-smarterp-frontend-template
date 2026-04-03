import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { Pos } from './features/pos/pos';
import { Kitchen } from './features/kitchen/kitchen';
import { Reservation } from './features/reservation/reservation';
import { Customers } from './features/customers/customers';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: Dashboard
    },
    {
        path: 'pos',
        component: Pos
    },
    {
        path: 'kitchen',
        component: Kitchen
    },
    {
        path: 'reservation',
        component: Reservation
    },
    {
        path: 'customers',
        component: Customers
    }
];
