"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getCustomers_1 = require("../getCustomers");
const dataStore_1 = require("../../adapters/dataStore");
describe('When getCustomer data is retrieved from dataStore', () => {
    test('Customer Data is retrieved', () => {
        const customer = { name: 'Ankur', id: '1', address: '123' };
        dataStore_1.dataStore.setData({ customers: [customer], orders: [] });
        const response = getCustomers_1.getCustomers();
        expect(response).toEqual([customer]);
    });
});
