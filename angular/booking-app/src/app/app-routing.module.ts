import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { IndexComponent } from './pages/index/index.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorpageComponent } from './pages/errorpage/errorpage.component';
import { SingleUserComponent } from './pages/single-user/single-user.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AllUsersComponent } from './pages/all-users/all-users.component';
import { AllhotelsComponent } from './pages/allhotels/allhotels.component';
import { LoginComponent } from './pages/login/login.component';
import { registerLocaleData } from '@angular/common';
import { ShowHotelsComponent } from './pages/show-hotels/show-hotels.component';

const routes: Routes = [
  {path:"",component:IndexComponent},
  {path:"register",component:RegisterComponent},
  {path:"hotels/single/:hotelid",component:HotelsComponent},
  {path:"contact",component:ContactComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"allusers",component:AllUsersComponent},
  {path:"allhotels",component:AllhotelsComponent},
  {path:"hotels",component:ShowHotelsComponent},
  {path:"login",component:LoginComponent},

  {path:"single/:userId",component:SingleUserComponent},
  {path:"**",component:ErrorpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
