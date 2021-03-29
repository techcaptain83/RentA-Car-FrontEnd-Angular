import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {HttpClientModule } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { ColorComponent } from './components/color/color.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { ColorFilterPipe } from './pipes/color-filter.pipe';
import { BrandFilterPipe } from './pipes/brand-filter.pipe';
import { CarFilterPipe } from './pipes/car-filter.pipe';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CarFilterComponent } from './components/car-filter/car-filter.component';


import { ToastrModule } from 'ngx-toastr';
import { CreditCardComponent } from './components/creditcard/creditcard.component';
import { CarAddComponent } from './components/car/car-add/car-add.component';
import { CarEditComponent } from './components/car/car-edit/car-edit.component';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AdminDashboardComponent } from './components/pages/admin-dashboard/admin-dashboard.component';
import { ColorsDashboardComponent } from './components/pages/admin-dashboard/colors-dashboard/colors-dashboard.component';
import { ColorAddComponent } from './components/pages/admin-dashboard/colors-dashboard/color-add/color-add.component';
import { ColorEditComponent } from './components/pages/admin-dashboard/colors-dashboard/color-edit/color-edit.component';





@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    CustomerComponent,
    RentalComponent,
    ColorComponent,
    CarComponent,
    BrandComponent,
    CarDetailComponent,
    ColorFilterPipe,
    BrandFilterPipe,
    CarFilterPipe,
    CarFilterComponent,
    CreditCardComponent,
    CarAddComponent,
    CarEditComponent,
    BrandAddComponent,
    ColorAddComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    AdminDashboardComponent,
    ColorsDashboardComponent,
    ColorEditComponent,
   
    
  
  
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    
    NgMultiSelectDropDownModule.forRoot(),
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
