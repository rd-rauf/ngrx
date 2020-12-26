
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CustomerService {
    constructor(private http: HttpClient) { }

    public getCustomers(id: string) {
        return this.http.get("https://jsonplaceholder.typicode.com/todos/" + id);
    }
}