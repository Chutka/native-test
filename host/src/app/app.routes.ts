import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'shell',
    loadComponent: () => loadRemoteModule('shell', './Component').then(m => m.AppComponent),
  }
];
