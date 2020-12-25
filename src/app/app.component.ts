import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Customer } from './models/customer.model';
import { IAppState } from 'src/app/app.state';
import * as CustomerActions from '../app/store/actions/customers.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  customer?: Customer = undefined;
  customerObservable: Observable<Customer>;
  counter: number = 1;

  constructor(private store: Store<any>) {
    this.customerObservable = this.store.select('customer');
    this.subs();

    this.store.select(state => {
      this.customer = state.customer;
    });
  }

  private subs() {
    this.customerObservable.subscribe(customer => {
      this.customer = customer
    });
  }

  getCustomer() {
    this.counter ++;
    this.store.dispatch({ type: CustomerActions.CUSTOMER_READACTION, payload: { name: 'Customer ' + this.counter } });
  }
}
