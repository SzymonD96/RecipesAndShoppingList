import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loadedFetured = 'recipe';
  title = 'app';

  onNavigagte(feature: string) {
    this.loadedFetured = feature;
  }
}
