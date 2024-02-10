import { Routes } from '@angular/router';
import { ProductsComponent } from './compo/products/products.component';
import { HomeComponent } from './compo/home/home.component';
import { ContactsComponent } from './compo/contacts/contacts.component';
import { SingleComponent } from './compo/single/single.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'product',component:ProductsComponent},
    {path:'contact',component:ContactsComponent},
    {path:'product/:id',component:SingleComponent}
];
