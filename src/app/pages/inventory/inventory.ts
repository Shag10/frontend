import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inventory',
  imports: [FormsModule],
  templateUrl: './inventory.html',
  styleUrl: './inventory.css',
})
export class InventoryComponent {

  private httpClient = inject(HttpClient);
  inventoryDto: any;

  inventoryData = {
    productId: '',
    productName: '',
    stockQuantity: 0,
    reorderStock: 0,
  }

  ngOnInit() {
    let url = 'https://localhost:7284/api/inventory';
    this.httpClient.get(url).subscribe(data => {
      this.inventoryDto = data;
      console.log(this.inventoryDto);
    }
    );
  }


  onSubmit() : void {
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
        }
      }
    );
  }
}
