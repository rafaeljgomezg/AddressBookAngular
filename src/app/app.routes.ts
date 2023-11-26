import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'', 
        redirectTo: 'home',
        pathMatch: 'full'
    },

    {
        path: 'home',
        title: 'Home',
        loadComponent: () => import('../app/components/home/home.component').then(c => c.HomeComponent)
    },

    {
        path:'contacts',
        loadComponent: () => import('../app/components/contacts/contacts.component').then(c => c.ContactsComponent)
    },

    {
        path:'newcontact',
        loadComponent: () => import('../app/components/newcontact/newcontact.component').then(c => c.NewcontactComponent)
    },


];
