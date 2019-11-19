import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_shared/_services/auth.service';
import { FormBuilder } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private route: ActivatedRoute,
              private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  onSubmit(loginData) {
    console.warn('Your order has been submitted', loginData);
    this.authService.login(loginData.username, loginData.password).pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/sales']);
        },
        error => {
          console.warn(error);
        });
  }

  ngOnInit() {
  }

}
