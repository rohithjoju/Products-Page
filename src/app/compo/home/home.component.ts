import { Component } from '@angular/core';
import { NavComponent } from '../../unit/nav/nav.component';
import { FooterComponent } from '../../unit/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
