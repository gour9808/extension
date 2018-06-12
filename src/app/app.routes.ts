import { Routes } from '@angular/router';

import { ContainerComponent } from './container/container.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { LoginComponent } from './login/login.component';

import { DataLoaderComponent } from './data-loader/data-loader.component';
import { EventsComponent } from './events/events.component';
import { DiscussionsComponent } from './discussions/discussions.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'load', pathMatch: 'full' },
    { path: 'auth', component: LoginComponent },
     { path: 'load', component: DataLoaderComponent },

    {
        path: 'home', component: ContainerComponent,
        children: [
            { path: '', redirectTo: 'my', pathMatch: 'full' },
            {
                path: 'my', component: DashboardComponent, children: [
                    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
                    { path: 'dashboard', component: DashboardComponent },
                ]
            },
            { path: 'events', component: EventsComponent },
            { path: 'discussion', component: DiscussionsComponent },
        ]
    },

];
// The layout will be like so:
// ->Login
// ->Loading
// ->Main Container
//     ->Other Pages
// ->Other Pages which does not encapsulate the Sidebar-Toolbar-Content layout