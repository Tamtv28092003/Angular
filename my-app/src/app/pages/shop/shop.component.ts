import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  products: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // Code thiết lập khi component được khởi tạo
    this.productService.getAll().subscribe(data => {
      this.products = data.product;
      console.log(data);

    });
  }
}
