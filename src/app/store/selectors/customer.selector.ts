import { IAppState } from "src/app/app.state";
import { createSelector } from '@ngrx/store';
import { Customer } from "../models/customer.model";

const CustomerSelector = (state: IAppState) => state.customer;

export const selectCustomer = createSelector(
    CustomerSelector,
    (state: Customer) => state
);
