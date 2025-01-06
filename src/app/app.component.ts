import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsListComponent } from './products-list.component';
import { ProductsAddFormComponent } from './products-add-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductsListComponent, ProductsAddFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'products-manager';
}
