import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import O from 'ol/control/OverviewMap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shell';

  constructor() {
    console.log(O);
  }
}
