import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminRequestsComponent } from './admin-requests/admin-requests.component';
import { BlogsComponent } from './blogs/blogs.component';
import { DonateFoodComponent } from './donate-food/donate-food.component';
import { DonateLogisticsComponent } from './donate-logistics/donate-logistics.component';
import { DonationsStatusComponent } from './donations-status/donations-status.component';
import { FoodRequestComponent } from './food-request/food-request.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ForgotUserIdComponent } from './forgot-user-id/forgot-user-id.component';
import { HelpRequestsComponent } from './help-requests/help-requests.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LogisticDonationStatusComponent } from './logistic-donation-status/logistic-donation-status.component';
import { LogisticRequestAdminComponent } from './logistic-request-admin/logistic-request-admin.component';
import { MappedRequestsComponent } from './mapped-requests/mapped-requests.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { RaiseHelpRequestComponent } from './raise-help-request/raise-help-request.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ResolutionFormComponentComponent } from './resolution-form-component/resolution-form-component.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ViewFoodRequestsComponent } from './view-food-requests/view-food-requests.component';
import { ViewLogisticDonationRequestsComponent } from './view-logistic-donation-requests/view-logistic-donation-requests.component';
import { VolunteerFoodRequestFormComponent } from './volunteer-food-request-form/volunteer-food-request-form.component';

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
  {path:'Admin Requests',component:AdminRequestsComponent},
  {path:'Food requests',component:ViewFoodRequestsComponent},
  {path:'mappedRequests',component:MappedRequestsComponent},
  {path:'Request Status',component:ViewFoodRequestsComponent},
  {path:'Food requests/Request Food',component:FoodRequestComponent},
  {path:'Donate Logistics',component:DonateLogisticsComponent},
  {path:'Logistic Donation Status',component:ViewLogisticDonationRequestsComponent},
  {path:'volunteerRequestForm',component:VolunteerFoodRequestFormComponent},
  {path:'Logistic Donation Requests',component:LogisticDonationStatusComponent},
  {path:'addVehicle',component:AddVehicleComponent},
  {path:'logisticRequestAdmin',component:LogisticRequestAdminComponent},
  {path:'Help',component:RaiseHelpRequestComponent},
  {path:'helpRequests',component:HelpRequestsComponent},
  {path:'resolution',component:ResolutionFormComponentComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
