
import {ActionReducerMap, createSelector} from '@ngrx/store';
import { Customer } from 'src/app/models/customer.model';
import { CustomersReducers } from './customers.reducers';

export interface RootReducerState {
  customer: Customer
}

export const rootReducer: ActionReducerMap<RootReducerState> = {
  customer: CustomersReducers
};