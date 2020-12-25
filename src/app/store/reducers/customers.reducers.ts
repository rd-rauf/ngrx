
import { IAppState } from 'src/app/app.state';
import { Customer } from 'src/app/models/customer.model';
import * as CustomerActions from '../actions/customers.actions';

const initialState: Customer = {
    name: 'Initial Customer'
}

export function CustomersReducers(state: Customer = initialState, action: CustomerActions.Actions) {
    switch (action.type) {
        case CustomerActions.CUSTOMER_READACTION:
            const newState = { ...state, ...action.payload };
            return newState;
        default:
            return state;
    }
}

// selectors
export const getCustomer = (state: IAppState) => state.customer;
