import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {

  isSidePanelVisible: boolean;

  constructor() {
    this.isSidePanelVisible = false;
  }

  toggleSidePanel() {
    this.isSidePanelVisible = !this.isSidePanelVisible;
  }

}
