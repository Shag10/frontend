import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './inventory.html',
  styleUrl: './inventory.css',
})
export class InventoryComponent {

  private httpClient = inject(HttpClient);
  inventoryDto: any = [];

  inventoryData = {
    productId: '',
    productName: '',
    stockQuantity: 0,
    reorderStock: 0,
  }

  ngOnInit() {
    this.InventoryDetails();
  }

  InventoryDetails() {
    let url = 'https://localhost:7284/api/inventory';
    this.httpClient.get(url).subscribe(data => {
      this.inventoryDto = data;
      console.log(this.inventoryDto);
    }
    );
  }

  OnDelete(productId: string) : void {

    const confirmDelete = confirm('Are you sure you want to delete this inventory data?');
    if (!confirmDelete) {
      return;
    }
    let url = `https://localhost:7284/api/inventory?ProductId=${productId}`;
    let httpOptions = {
      headers: {
        Authorization: 'Shag123-auth' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
    };
    this.httpClient.delete(url, httpOptions).subscribe(
      {
        next: (v) => {
          console.log(v);
          alert('Inventory data deleted successfully!');
          this.InventoryDetails();
        },
        error: (e) => {
          console.error(e);
          alert('Error deleting inventory data!'+ e.message);
        },
      }
    );
  }

  OnSubmit() : void {
    let url = 'https://localhost:7284/api/inventory';
    let httpOptions = {
      headers: {
        Authorization: 'Shag123-auth' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
    };
    this.httpClient.post(url, this.inventoryData, httpOptions).subscribe(
      {
        next: v => console.log(v),
        error: e => console.error(e),
        complete: () => 
        {
          alert('Inventory data submitted successfully!' 
            + JSON.stringify(this.inventoryData) + ' with token: ' 
            + localStorage.getItem('token') );
          this.InventoryDetails();
        }
      }
    );
  }
  trackByProductId(index: number, item: any): string {
  return item.ProductId;
}
}
