import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from "./layout/main/main.component";
import {FooterComponent} from "./layout/footer/footer.component";
import {SidebarComponent} from "./layout/sidebar/sidebar.component";
import {TopBarComponent} from "./layout/topbar/topbar.component";
import {SidebarTabContentComponent} from "./layout/sidebar/sidebar-tab-content/sidebar-tab-content.component";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {AuthModule} from "@auth0/auth0-angular";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MenuItemComponent} from './layout/sidebar/menu-item/menu-item.component';
import {MenuService} from "./layout/sidebar/menu.service";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TopBarComponent,
    SidebarComponent,
    SidebarTabContentComponent,
    FooterComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InputTextModule,
    RippleModule,
    AuthModule.forRoot({
      domain: 'ap-auth.us.auth0.com',
      clientId: 'nJ1nUiDR9OjzroI35xUboViC6V8SHBkV',
    }),
    RippleModule,
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
