import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { Pos } from './features/dashboard/pos/pos';
import { Kitchen } from './features/dashboard/kitchen/kitchen';
import { Reservation } from './features/dashboard/reservation/reservation';
import { Customers } from './features/dashboard/customers/customers';
import { Orders } from './features/dashboard/orders/orders';
import { Menu } from './features/dashboard/menu/menu';
import { Campaigns } from './features/dashboard/campaigns/campaigns';
import { CampaignAnalytics } from './features/dashboard/campaign-analytics/campaign-analytics';
import { Suppliers } from './features/dashboard/suppliers/suppliers';
import { Email } from './features/dashboard/email/email';
import { Login } from './common/auth/login/login';
import { Overview } from './features/dashboard/overview/overview';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full'
    },
    {
        path: 'auth/login',
        component: Login
    },
    {
        path: 'dashboard',
        component: Dashboard,
        children: [
            {
                path: '',
                redirectTo: 'overview',
                pathMatch: 'full'
            },
            {
                path: 'overview',
                component: Overview
            },
            {
                path: 'pos',
                component: Pos
            },
            {
                path: 'orders',
                component: Orders
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
            },
            {
                path: 'menu',
                component: Menu
            },
            {
                path: 'suppliers',
                component: Suppliers
            },
            {
                path: 'campaigns',
                component: Campaigns
            },
            {
                path: 'campaign-analytics',
                component: CampaignAnalytics
            },
            {
                path: 'email',
                component: Email
            },
        ]
    }
];
