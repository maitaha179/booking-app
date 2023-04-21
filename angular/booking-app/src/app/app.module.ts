import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { IndexComponent } from './pages/index/index.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorpageComponent } from './pages/errorpage/errorpage.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SingleUserComponent } from './pages/single-user/single-user.component';
import { AllUsersComponent } from './pages/all-users/all-users.component';
import { AllhotelsComponent } from './pages/allhotels/allhotels.component';
import { SinglehotelComponent } from './pages/singlehotel/singlehotel.component';
import { LoginComponent } from './pages/login/login.component';
import { ShowHotelsComponent } from './pages/show-hotels/show-hotels.component';
import { RoomsComponent } from './pages/rooms/rooms.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    HotelsComponent,
    IndexComponent,
    ContactComponent,
    ErrorpageComponent,
    DashboardComponent,
    SingleUserComponent,
    AllUsersComponent,
    AllhotelsComponent,
    SinglehotelComponent,
    LoginComponent,
    ShowHotelsComponent,
    RoomsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
