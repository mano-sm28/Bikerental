import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Router,RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { HttpModule } from '@angular/http';
import { AdminlogComponent } from './adminlog/adminlog.component';
import { AdminsignComponent } from './adminsign/adminsign.component';
import { FilterPipe } from './filter.pipe';
import { TextInputAutocompleteModule } from 'angular-text-input-autocomplete';
import { polyfill as keyboardEventKeyPolyfill } from 'keyboardevent-key-polyfill';
import { FgtpassComponent } from './fgtpass/fgtpass.component';
import { MainComponent } from './main/main.component';
import { DisplayComponent } from './display/display.component';
import { MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { BikeuploadComponent } from './bikeupload/bikeupload.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BookingComponent } from './booking/booking.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { CalendarModule } from 'angular-calendar';
import { CommonModule } from '@angular/common';


keyboardEventKeyPolyfill();

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    AdminlogComponent,
    AdminsignComponent,
    FilterPipe,
    FgtpassComponent,  
    MainComponent,
     DisplayComponent,
    UserloginComponent,
    UsersignupComponent,
    BikeuploadComponent,
    HeaderComponent,
    FooterComponent,
    BookingComponent,
    AboutComponent,
    ProfileComponent,
  
  ],
  imports: [
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    TextInputAutocompleteModule,
    HttpModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    CommonModule,
    CalendarModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'login',
        component:LoginComponent
      },
      {
        path: 'signup',
        component:SignupComponent
      },
      {
        path: 'home',
        component:HomeComponent
      },
      {
        path: 'forgot',
        component:FgtpassComponent  
      },
      {
        path: 'display',
        component: DisplayComponent
      },
      {
        path: 'userlogin',
        component:UserloginComponent
      },
      {
        path:'usersignup',
        component:UsersignupComponent
      },
      {
        path:'booking',
        component:BookingComponent
      }, 
      {
        path:'bikeupload',
        component:BikeuploadComponent
      },
      {
        path:'about',
        component:AboutComponent
      },
      {
        path:'profile',
        component:ProfileComponent
      },
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
