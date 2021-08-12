import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/network-services/auth.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.initForm();
  }

  public login(): void {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    this.authService
      .login(username, password)
      .pipe(tap((res) => localStorage.setItem('authToken', res.token)))
      .subscribe(() => {
        this.router.navigate([`${routes.docketList}`]);
      });
  }

  private initForm(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
