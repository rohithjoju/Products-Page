import { Component } from '@angular/core';
import { NavComponent } from '../../unit/nav/nav.component';
import { FooterComponent } from '../../unit/footer/footer.component';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [NavComponent,FooterComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {

}
