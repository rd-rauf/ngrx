
import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { of, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import * as CustomersActions from '../actions/customers.actions';
import { CustomerService } from '../../services/customer.service';

@Injectable()
export class CustomerEffect {

    @Effect()
    GetCustomers$ = this.actions$.pipe(
        ofType<CustomersActions.CustomersFetchAction>(CustomersActions.CUSTOMERS_FETCHACTION),
        switchMap((data: any) => {
            return this.customerService.getCustomers(data.payload.id)
        }),
        switchMap((data: any) => {
            return of(new CustomersActions.CustomersReceivedAction(data))
        }),
    );

    constructor(
        private actions$: Actions,
        private customerService: CustomerService) { }
}