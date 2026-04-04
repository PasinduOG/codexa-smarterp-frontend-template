import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { Pos } from './features/pos/pos';
import { Kitchen } from './features/kitchen/kitchen';
import { Reservation } from './features/reservation/reservation';
import { Customers } from './features/customers/customers';
import { Orders } from './features/orders/orders';
import { Menu } from './features/menu/menu';
import { Campaigns } from './features/campaigns/campaigns';
import { CampaignAnalytics } from './features/campaign-analytics/campaign-analytics';
import { Settings } from './features/settings/settings';
import { Suppliers } from './features/suppliers/suppliers';
import { Email } from './features/email/email';

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
];
