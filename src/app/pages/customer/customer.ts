import { Component } from '@angular/core';
import { CustomerDetailsDialog } from '../customer-details-dialog/customer-details-dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer',
  imports: [CustomerDetailsDialog, CommonModule],
  templateUrl: './customer.html',
  styleUrl: './customer.css',
})
export class CustomerComponent {
}
