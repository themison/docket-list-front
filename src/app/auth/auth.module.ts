import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthPageRoutingModule } from './auth-routing.module';

import { AuthPage } from './auth.page';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, AuthPageRoutingModule, FormsModule, ReactiveFormsModule],
  declarations: [AuthPage, LoginComponent, RegisterComponent],
})
export class AuthPageModule {}
