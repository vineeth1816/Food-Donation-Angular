import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BlogsComponent } from './blogs/blogs.component';
import { DonateFoodComponent } from './donate-food/donate-food.component';
import { DonationsStatusComponent } from './donations-status/donations-status.component';
import { FoodRequestComponent } from './food-request/food-request.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ForgotUserIdComponent } from './forgot-user-id/forgot-user-id.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path:'register',component:RegisterFormComponent},
  {path:'login',component:LoginFormComponent},

  {path:'',component:HomeComponent},
  {path:'login/forgotUserId',component:ForgotUserIdComponent},
  {path:'login/forgotpassword',component:ForgotPasswordComponent},
  {path:'admin',component:AdminDashboardComponent},
  {path:'user',component:UserDashboardComponent},
  {path:'login/forgotpassword/passwordReset',component:PasswordResetComponent},
  {path:'blogs',component:UserDashboardComponent},
  {path:'adminBlogs',component:BlogsComponent},
  {path:'Donate Food',component:DonateFoodComponent},
  {path:'View Requests',component:DonationsStatusComponent},
  {path:'Dashboard',component:AdminDashboardComponent},
  {path:'Request Food',component:FoodRequestComponent},
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
