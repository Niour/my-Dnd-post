import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'buff';
  title = 'my-Dnd-post';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
