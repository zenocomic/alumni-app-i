import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  inputEmail: any;
  inputPassword: any;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitEmailPassword() {
    if (this.inputEmail != "mana.rak@excise.go.th" || this.inputPassword != '12345678') {
      Swal.fire({
        title: 'เกิดข้อผิดพลาด',
        text: 'อีเมล์หรือพาสเวิร์ดไม่ถูกต้อง',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    } else {
      Swal.fire({
        title: 'ยินดีต้อนรับ',
        text: 'เข้าสู่ระบบ คุณ ' + this.inputEmail,
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    }
  }
}
