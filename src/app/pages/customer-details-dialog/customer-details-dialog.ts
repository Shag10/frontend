import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-customer-details-dialog',
  imports: [FormsModule, CommonModule],
  templateUrl: './customer-details-dialog.html',
  styleUrl: './customer-details-dialog.css',
})
export class CustomerDetailsDialog {
  private httpClient = inject(HttpClient);
  modal = inject(NgbActiveModal);

  CustomerData = {
    customerId: '',
    customerName: '',
    email: '',
    phoneNumber: '',
    address: '',
    registrationDate: ''
  }

  onReset() {
    this.CustomerData = {
      customerId: '',
      customerName: '',
      email: '',
      phoneNumber: '',
      address: '',
      registrationDate: ''
    };
  }
  
  
  onSubmit() {
    let url = 'https://localhost:7284/api/customer';
    let httpOptions = {
      headers: {
        Authorization: 'Shag123-auth' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
    };
    this.httpClient.post(url, this.CustomerData, httpOptions).subscribe(
        {
          next: v => console.log(v),
          error: e => console.error(e),
          complete: () => 
          {
            alert('Customer data updated successfully!' 
              + JSON.stringify(this.CustomerData));
            this.modal.close();
            }
          }
      );
  }
}
