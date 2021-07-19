import {Component, OnInit} from '@angular/core';
import {MainComponent} from "../main/main.component";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  model: any;

  constructor(public app: MainComponent) {
  }

  ngOnInit(): void {
    this.model = [
      {label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/']}
    ]
  }

}
