import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'project-setup';
  loadedFeature = 'recipe';
  onNevigate(feature: string) {
    this.loadedFeature = feature;
  }
}
