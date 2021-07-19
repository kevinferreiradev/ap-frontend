import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {TableModule} from "primeng/table";
import {FullCalendarModule} from "primeng/fullcalendar";
import {PanelModule} from "primeng/panel";
import {ButtonModule} from "primeng/button";


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TableModule,
    FullCalendarModule,
    PanelModule,
    ButtonModule
  ]
})
export class DashboardModule { }
