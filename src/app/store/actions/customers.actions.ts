
import { Action } from '@ngrx/store';
import { Customer } from 'src/app/store/models/customer.model';

export const CUSTOMER_READACTION = "CUSTOMER_READACTION";
export const CUSTOMER_CREATEACTION = "CUSTOMER_CREATEACTION";
export const CUSTOMERS_FETCHACTION = "CUSTOMERS_FETCHACTION";
export const CUSTOMERS_RECEIVEDACTION = "CUSTOMERS_RECEIVEDACTION";

export class CustomersReadAction implements Action {
    readonly type: string = CUSTOMER_READACTION;
    payload?: Customer = undefined;
}

export class CustomersCreateAction implements Action {
    readonly type: string = CUSTOMER_CREATEACTION;
    payload?: Customer = undefined;
}

export class CustomersFetchAction implements Action {
    readonly type: string = CUSTOMERS_FETCHACTION;
    payload?: Customer = undefined;
}

export class CustomersReceivedAction implements Action {
    readonly type: string = CUSTOMERS_RECEIVEDACTION;
    payload?: Customer = undefined;

    constructor(p: any) {
        this.payload = p;
    }
}

export type Actions = CustomersReadAction | CustomersCreateAction | CustomersFetchAction | CustomersReceivedAction;
