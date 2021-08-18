import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/network-services/auth.service';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.initForm();
  }

  public register(): void {
    this.authService.register(this.registerForm.value).subscribe((res) => {
      localStorage.setItem('authToken', res.token);
      this.router.navigate([`${routes.docketList}`]);
      console.log('after navigate');
    });
  }

  public goToLogin(): void {
    this.router.navigate([`${routes.auth}/${routes.login}`]);
  }

  private initForm(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }
}
