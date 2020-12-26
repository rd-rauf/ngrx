import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestInterceptor } from './common/request.interceptor';

import { CustomersComponent } from './components/customers/customers.component';

import { CustomerService } from '../app/services/customer.service';

import { reducers } from '../app/store/reducers';
import { effects } from '../app/store/effects';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects)
  ],
  providers: [
    CustomerService,
    {
      multi: true,
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
