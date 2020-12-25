import { Customer } from "./models/customer.model";

export interface IAppState {
    readonly customer: Customer;
}
