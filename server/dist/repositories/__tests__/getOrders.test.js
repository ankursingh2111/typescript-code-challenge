"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getOrders_1 = require("../getOrders");
const dataStore_1 = require("../../adapters/dataStore");
describe('When getCustomer data is retrieved from dataStore', () => {
    test('Customer Data is retrieved', () => {
        dataStore_1.dataStore.setData({ customers: [], orders: [] });
        const response = getOrders_1.getOrders();
        expect(response).toEqual([]);
    });
});
