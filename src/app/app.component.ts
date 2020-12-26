import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Customer } from './store/models/customer.model';
import { IAppState } from 'src/app/app.state';
import * as CustomerActions from '../app/store/actions/customers.actions';
import { selectCustomer } from './store/selectors/customer.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  customer?: Customer = undefined;
  // customerObservable: Observable<Customer>;
  counter: number = 1;
  customerId?: string = "1";

  constructor(private store: Store<any>) {
    // this.customerObservable = this.store.select('customer');

    this.store.pipe(select(selectCustomer))
      .subscribe((customer: Customer) => {
        this.customer = customer
      });
    // this.subs();
  }

  /* subs() {
    this.customerObservable.subscribe((customer: any) => {
      this.customer = customer;
    });
  } */

  getCustomer() {
    /* this.counter++;
    this.store.dispatch({ type: CustomerActions.CUSTOMER_READACTION, payload: { name: 'Customer ' + this.counter } }); */

    this.store.dispatch({ type: CustomerActions.CUSTOMERS_FETCHACTION, payload: { id: this.customerId } });
  }
}

interface Post {
  title: string;
}