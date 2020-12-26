
import { IAppState } from 'src/app/app.state';
import { Customer } from 'src/app/store/models/customer.model';
import * as CustomerActions from '../actions/customers.actions';

const initialState: Customer = {
    name: 'No Customer',
    title: 'No TItle'
}

export function CustomersReducers(state: Customer = initialState, action: CustomerActions.Actions): Customer {
    switch (action.type) {
        case CustomerActions.CUSTOMER_READACTION:
            const newState = { ...state, ...action.payload };
            return newState;
        case CustomerActions.CUSTOMERS_FETCHACTION:
            const newFetchState = { ...state, ...action.payload };
            return newFetchState;
        case CustomerActions.CUSTOMERS_RECEIVEDACTION:
            const newRecState = { ...state, ...action.payload };
            return newRecState;
        default:
            return state;
    }
}
