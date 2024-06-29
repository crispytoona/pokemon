import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path: 'home-component', component: HomeComponent},
    {path: 'contact-component', component: ContactComponent},
    {path: '', redirectTo:'home-component', pathMatch: 'full'}
];
