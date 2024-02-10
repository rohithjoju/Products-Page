import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';
import { ProductsComponent } from './compo/products/products.component';
import { NavComponent } from './unit/nav/nav.component';
import { CarroComponent } from './unit/carro/carro.component';
import { FooterComponent } from './unit/footer/footer.component';
import { ContactsComponent } from './compo/contacts/contacts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductsComponent,NavComponent,CarroComponent,FooterComponent,ContactsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'products';
  products: any = []
  constructor(public api: ApiService) { }
  ngOnInit() {
    this.api.getData().subscribe(response => {
      this.products = response;
      console.log(this.products)
    })

  }


}
