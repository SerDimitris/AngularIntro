import { Routes } from '@angular/router';
import { ComponentInputExample } from './components/component-input-example/component-input-example';
import { Welcome } from './components/welcome/welcome';
import { EventBindExample } from './components/event-bind-example/event-bind-example';
import { ForDirectiveExample } from './components/for-directive-example/for-directive-example';

export const routes: Routes = [
    {path: 'component-input-example', component: ComponentInputExample},
    {path: 'for-directive-example', component: ForDirectiveExample},
    {path: 'event-bind-example', component: EventBindExample},
    {path: 'welcome', component: Welcome },
    {path: '', redirectTo:'/welcome', pathMatch: 'full'}
];
