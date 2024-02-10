import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { NavComponent } from '../../unit/nav/nav.component';
import { FooterComponent } from '../../unit/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NavComponent,FooterComponent,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: any = []
  constructor(public api: ApiService) { }
  ngOnInit() {
    this.api.getData().subscribe(response => {
      this.products = response;
      console.log(this.products)
    })

  }
  
}
