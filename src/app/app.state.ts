import { Customer } from "./store/models/customer.model";

export interface IAppState {
    readonly customer: Customer;
}
