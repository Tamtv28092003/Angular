import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  providers: [MessageService]
})
export class DetailComponent implements OnInit {
  productId: any;
  product: any;
  name!: string;
  price!: number;
  quantity!: number;
  userId!: string;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private messageService: MessageService,
    private router: Router,

  ) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id');
      this.getProductDetails(this.productId);
    });
  }
  getProductDetails(productId: string): void {
    this.productService.getOne(productId).subscribe(data => {
      this.product = data.product;
      console.log("detail", data);
      this.name = this.product.name;
      this.price = this.product.price * this.quantity
    });
  }

  // 
  submitForm() {
    const userString = localStorage.getItem('user');
    let userId: string | undefined;

    if (userString !== null) {
      const user = JSON.parse(userString);
      userId = user._id;
    } else {
      // Xử lý trường hợp khi giá trị userString là null
    }
    const item = {
      productId: this.productId,
      price: this.product.price * this.quantity,
      quantity: this.quantity,
      userId: userId
    };
    console.log('name value:', item.productId);
    console.log('price value:', item.price);
    console.log('quantity value:', item.quantity);
    console.log('userId value:', item.userId);
    // Gọi phương thức đăng ký trong AuthService và truyền giá trị từ các trường input
    if (userId !== undefined) {
      this.cartService.addCart(userId, item.productId, item.quantity, item.price)
        .subscribe(
          (response: any) => {
            // Xử lý phản hồi từ API sau khi thêm giỏ hàng thành công
            console.log({ response });
            this.messageService.add({ severity: 'success', summary: 'Success', detail: `${response.message}` });
            setTimeout(() => {
              this.router.navigate(['/cart']);
            }, 1500)
          },
          (error: any) => {
            // Xử lý lỗi nếu có
            this.messageService.add({ severity: 'warn', summary: 'warn', detail: `${error.error.message}` });
            console.error("err", error);
          }
        );
    } else {
      // Xử lý trường hợp khi userId là undefined
    }
  }

}
