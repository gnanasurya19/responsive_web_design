import { Routes } from '@angular/router';
import { FocoComponent } from './foco/foco.component'; // Adjust the path as necessary
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
    { path: 'foco', component: FocoComponent },
    { path: '', component: HomepageComponent }
];
