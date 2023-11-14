import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-home',
  templateUrl: './list-home.component.html',
  styleUrls: ['./list-home.component.scss']
})
export class ListHomeComponent implements OnInit {
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