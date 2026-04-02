import { Component, inject } from '@angular/core';
import { CustomerDetailsDialog } from '../customer-details-dialog/customer-details-dialog';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer',
  imports: [CommonModule],
  templateUrl: './customer.html',
  styleUrl: './customer.css',
})
export class CustomerComponent {
   private modalService = inject(NgbModal);
   customerDetialsDto: any = [];
   httpClient = inject(HttpClient);

   ngOnInit(): void {
    this.getCustomerDetails();
  }

  openCustomerDetailsDialog() {
    this.modalService.open(CustomerDetailsDialog);
  }

    getCustomerDetails() {
    let url = 'https://localhost:7284/api/customer';
    this.httpClient.get(url).subscribe({
      next: (data) => {
        this.customerDetialsDto = data as any[];
        console.log(this.customerDetialsDto);
      },
      error: (err) => {
        console.error('Failed to load customers', err);
      }
    });  
  }
  
  OnUpdate(customer: any) {
    const modalRef = this.modalService.open(CustomerDetailsDialog);
    modalRef.componentInstance.CustomerData = { ...customer };
    modalRef.result.then( 
      (result) => {
        if (result === 'updated') {
          this.getCustomerDetails();
        }
      },
      (reason) => {
        console.log('Customer details dialog dismissed');
      }
    );
  }

  OnDelete(customerId: string) : void {

    const confirmDelete = confirm('Are you sure you want to delete this customer data?');
    if (!confirmDelete) {
      return;
    }
    let url = `https://localhost:7284/api/customer?CustomerId=${customerId}`;
    let httpOptions = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
    };
    this.httpClient.delete(url, httpOptions).subscribe(
      {
        next: (v) => {
          console.log(v);
          alert('Customer data deleted successfully!');
          this.getCustomerDetails();
        },
        error: (e) => {
          console.error(e);
          alert('Error deleting customer data!'+ e.message);
        },
      }
    );
  }
}
