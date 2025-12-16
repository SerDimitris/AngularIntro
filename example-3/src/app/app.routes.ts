import { Routes } from '@angular/router';
import { ComponentInputExample } from './components/component-input-example/component-input-example';
import { Welcome } from './components/welcome/welcome';
import { EventBindExample } from './components/event-bind-example/event-bind-example';
import { ForDirectiveExample } from './components/for-directive-example/for-directive-example';
import { SimpleDatatable } from './components/simple-datatable/simple-datatable';
import { ComponentOutputExample } from './components/component-output-example/component-output-example';
import { ReactiveForms } from './components/reactive-forms/reactive-forms';

export const routes: Routes = [
    {path: 'component-input-example', component: ComponentInputExample},
    {path: 'for-directive-example', component: ForDirectiveExample},
    {path: 'event-bind-example', component: EventBindExample},
    {path: 'welcome', component: Welcome },
    {path: '', redirectTo:'/welcome', pathMatch: 'full'},
    {path: 'simple-datatable', component: SimpleDatatable},
    {path: 'component-output-example', component: ComponentOutputExample},
    {path: 'reactive-forms', component: ReactiveForms}
];