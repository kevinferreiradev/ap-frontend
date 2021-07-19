import {Component} from '@angular/core';
import {MainComponent} from "../main/main.component";
import {AppComponent} from "../../app.component";
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html'
})
export class TopBarComponent {

  constructor(public app: AppComponent, public appMain: MainComponent, public auth: AuthService) {}
}
