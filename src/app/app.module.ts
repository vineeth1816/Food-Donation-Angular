import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ForgotUserIdComponent } from './forgot-user-id/forgot-user-id.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { EventEmitterService } from './event-emitter-service.service';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { BlogsComponent } from './blogs/blogs.component';
import { DonateFoodComponent } from './donate-food/donate-food.component';
import { DonationsStatusComponent } from './donations-status/donations-status.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    RegisterFormComponent,
    LoginFormComponent,
    ForgotUserIdComponent,
    ForgotPasswordComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    PasswordResetComponent,
    BlogsComponent,
    DonateFoodComponent,
    DonationsStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    EventEmitterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
