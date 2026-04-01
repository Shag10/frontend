import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  marqueeItems = [
  'Free Shipping Over ₹999', '✦',
  'New Arrivals Every Week', '✦',
  'Easy 30-Day Returns', '✦',
  'Exclusive Member Deals', '✦',
];

categories = [
  { icon: '👟', name: 'Footwear' },
  { icon: '👗', name: 'Fashion' },
  { icon: '📱', name: 'Electronics' },
  { icon: '🏠', name: 'Home & Living' },
  { icon: '💄', name: 'Beauty' },
  { icon: '🎮', name: 'Gaming' },
];

featuredProducts = [
  { emoji: '👟', name: 'Air Runner Pro Max',    category: 'Footwear',    price: 2999,  oldPrice: 4999  },
  { emoji: '🎧', name: 'NoiseBlock Headphones', category: 'Electronics', price: 5499,  oldPrice: 8999  },
  { emoji: '⌚', name: 'Smart Watch Series X',  category: 'Accessories', price: 7999,  oldPrice: 12000 },
  { emoji: '💻', name: 'UltraSlim Laptop Sleeve',category: 'Electronics',price: 899,   oldPrice: 1499  },
];

trustItems = [
  { icon: '🚚', title: 'Free Shipping',    sub: 'On orders over ₹999'  },
  { icon: '🔄', title: 'Easy Returns',     sub: '30-day hassle-free'   },
  { icon: '🔒', title: 'Secure Payments',  sub: '100% protected'       },
  { icon: '🎧', title: '24/7 Support',     sub: 'Always here for you'  },
];

browseCategory(cat: any) { /* navigate to category */ }
addToCart(product: any)  { /* add to cart logic   */ }
}
