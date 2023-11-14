import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  providers: [MessageService]
})
export class SigninComponent {
  email!: string;
  password!: string;
  user!: any;
  constructor(private authService: AuthService, private router: Router, private messageService: MessageService) { }
  submitForm() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Gọi phương thức đăng ký trong AuthService và truyền giá trị từ các trường input
    this.authService.signin(this.email, this.password)
      .subscribe(
        (response: any) => {
          // Lưu accessToken vào localStorage
          localStorage.setItem('accessToken', response.accessToken);
          // Lưu user vào localStorage
          localStorage.setItem('user', JSON.stringify(response.user));
          // Xử lý phản hồi từ API sau khi đăng ký thành công
          console.log({ response });
          if (response.user.role == "admin") {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Đăng Nhập Thành Công Admin' });
            setTimeout(() => {
              this.router.navigate(['/admin']);
            }, 2000)
          } else {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: `Đăng Nhập Thành Công ${response.user.name}` });
            setTimeout(() => {
              this.router.navigate(['/']);
            }, 2000)
          }
        },
        error => {
          // Xử lý lỗi nếu có
          this.messageService.add({ severity: 'warn', summary: 'warn', detail: `${error.error.message}` });
          console.error("err", error);
        }
      );
  }
}
