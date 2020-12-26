
import {ActionReducerMap, createSelector} from '@ngrx/store';
import { Customer } from 'src/app/store/models/customer.model';
import { CustomersReducers } from './customers.reducers';

export interface RootReducerState {
  customer: Customer
}

export const reducers: ActionReducerMap<RootReducerState> = {
  customer: CustomersReducers
};