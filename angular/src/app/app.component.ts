import {Component, ViewChild} from '@angular/core';
import {NavigationComponent} from "./navigation/navigation.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';

  @ViewChild(NavigationComponent)
  navigationComponent?: NavigationComponent = undefined;
}
