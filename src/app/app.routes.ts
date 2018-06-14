import { Routes } from '@angular/router';
import { ExtraOptions, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ContainerComponent } from './container/container.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventsComponent } from './events/events.component';
import { DiscussionsComponent } from './discussions/discussions.component';

export const eventRoutes: Routes = [
    { path: 'all', component: EventsComponent },
]

export const discussionsRoutes: Routes = [
    { path: 'all', component: DiscussionsComponent }
]

export const dashboardRoutes: Routes = [
    { path: '', redirectTo: 'my', pathMatch: 'full' },
    { path: 'my', component: DashboardComponent },
    { path: 'events', loadChildren: 'app/events/events.module#EventsModule' },
    { path: 'discussions', loadChildren: 'app/discussions/discussion.module#DisscussionsModule' }
];

export const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home', component: ContainerComponent, loadChildren: 'app/dashboard/dashboard.module#DashboardModule'

    }

];

export const routingConfiguration: ExtraOptions = {
    paramsInheritanceStrategy: 'always'
};

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, routingConfiguration)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

