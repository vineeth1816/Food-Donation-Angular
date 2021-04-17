import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ForgotUserIdComponent } from './forgot-user-id/forgot-user-id.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { RegisterFormComponent } from './register-form/register-form.component';

const routes: Routes = [
  {path:'register',component:RegisterFormComponent},
  {path:'login',component:LoginFormComponent},

  {path:'',component:HomeComponent},
  {path:'login/forgotUserId',component:ForgotUserIdComponent},
  {path:'login/forgotpassword',component:ForgotPasswordComponent},
  {path:'login/forgotpassword/passwordReset',component:PasswordResetComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
