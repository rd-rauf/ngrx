
import { Action } from '@ngrx/store';
import { Customer } from 'src/app/models/customer.model';

export const CUSTOMER_READACTION = "CUSTOMER_READACTION";
export const CUSTOMER_CREATEACTION = "CUSTOMER_CREATEACTION";

export class CustomersReadAction implements Action {
    readonly type: string = CUSTOMER_READACTION;
    payload?: Customer = undefined;
}

export class CustomersCreateAction implements Action {
    readonly type: string = CUSTOMER_CREATEACTION;
    payload?: Customer = undefined;
}

export type Actions = CustomersReadAction | CustomersCreateAction;
