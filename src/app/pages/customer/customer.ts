import { Component, inject } from '@angular/core';
import { CustomerDetailsDialog } from '../customer-details-dialog/customer-details-dialog';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-customer',
  imports: [CommonModule],
  templateUrl: './customer.html',
  styleUrl: './customer.css',
})
export class CustomerComponent {
   private modalService = inject(NgbModal);

  openCustomerDetailsDialog() {
    this.modalService.open(CustomerDetailsDialog);
  }
}
