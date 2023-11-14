import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [MessageService]
})
export class SignupComponent {
  name!: string;
  email!: string;
  password!: string;
  confirmPassword!: string;
  user!: any;
  constructor(private authService: AuthService, private router: Router, private messageService: MessageService) { }


  submitForm() {
    console.log('Password:', this.password);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('confirmPassword:', this.confirmPassword);
    // Gọi phương thức đăng ký trong AuthService và truyền giá trị từ các trường input
    this.authService.signup(this.name, this.email, this.password, this.confirmPassword)
      .subscribe(
        (response: any) => {
          // Xử lý phản hồi từ API sau khi đăng ký thành công
          console.log({ response });
          this.messageService.add({ severity: 'success', summary: 'Success', detail: `${response.message}` });
          setTimeout(() => {
            this.router.navigate(['/signin']);
          }, 2000)

        },
        error => {
          // Xử lý lỗi nếu có
          this.messageService.add({ severity: 'warn', summary: 'warn', detail: `${error.error.message}` });
          console.error("err", error);
        }
      );
  }
}
