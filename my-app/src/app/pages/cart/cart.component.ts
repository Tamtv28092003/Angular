import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  providers: [MessageService]
})
export class CartComponent {
  cart: any;
  constructor(private cartService: CartService, private messageService: MessageService) { }
  ngOnInit() {
    this.getCartUser();
  }

  getCartUser() {
    const accessToken = localStorage.getItem('accessToken');
    console.log("token:", accessToken);
    if (!accessToken) {
      console.error('accessToken not found');
      // Xử lý khi accessToken không tồn tại, ví dụ: chuyển hướng đến trang đăng nhập.
      return;
    }

    this.cartService.getCartUser().subscribe(
      (response) => {
        console.log("DataCart", response.cart.products);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: `${response.message}` });
        // Xử lý kết quả tại đây
        this.cart = response.cart.products;
      },
      (error) => {
        console.error(error);
        this.messageService.add({ severity: 'warn', summary: 'warn', detail: `${error.error.message}` });
        // Xử lý lỗi tại đây
      }
    );
  }
}
