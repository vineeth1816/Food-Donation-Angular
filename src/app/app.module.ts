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

import { FoodRequestComponent } from './food-request/food-request.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminRequestsComponent } from './admin-requests/admin-requests.component';
import { ViewFoodRequestsComponent } from './view-food-requests/view-food-requests.component';
import { MappedRequestsComponent } from './mapped-requests/mapped-requests.component';
import { DonateLogisticsComponent } from './donate-logistics/donate-logistics.component';
import { ViewLogisticDonationRequestsComponent } from './view-logistic-donation-requests/view-logistic-donation-requests.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { VolunteerFoodRequestFormComponent } from './volunteer-food-request-form/volunteer-food-request-form.component';
import { LogisticDonationStatusComponent } from './logistic-donation-status/logistic-donation-status.component';
import { LogisticRequestAdminComponent } from './logistic-request-admin/logistic-request-admin.component';
import { RaiseHelpRequestComponent } from './raise-help-request/raise-help-request.component';
import { HelpRequestsComponent } from './help-requests/help-requests.component';
import { ResolutionFormComponentComponent } from './resolution-form-component/resolution-form-component.component';





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
    DonationsStatusComponent,
    FoodRequestComponent,
    AdminRequestsComponent,
    ViewFoodRequestsComponent,
    MappedRequestsComponent,
    DonateLogisticsComponent,
    ViewLogisticDonationRequestsComponent,
    AddVehicleComponent,
    VolunteerFoodRequestFormComponent,
    LogisticDonationStatusComponent,
    LogisticRequestAdminComponent,
    RaiseHelpRequestComponent,
    HelpRequestsComponent,
    ResolutionFormComponentComponent,
    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    EventEmitterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
