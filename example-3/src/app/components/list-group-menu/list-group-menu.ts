import { Component } from '@angular/core';
import { MenuEntry } from '../../shared/interfaces/menu-entry';
import { RouterLink, RouterLinkActive } from "@angular/router";


@Component({
  selector: 'app-list-group-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './list-group-menu.html',
  styleUrl: './list-group-menu.css',
})
export class ListGroupMenu {
  menu: MenuEntry[] = [
    { text: "Component Input Example", routerLink: "component-input-example"},
    { text: "@for Derictive Example,", routerLink: "for-directive-example"},
    { text: "Event Bind Example", routerLink: "event-bind-example"},
    { text: "Simple Data Table", routerLink: "simple-datatable"},
    { text: "Component Output Example", routerLink: "component-output-example"}
  ]
}