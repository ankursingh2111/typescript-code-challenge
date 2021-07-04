"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const transformOrder_1 = require("../transformOrder");
const data = {
    id: 1,
    vendor: 'acme',
    date: '03/03/2017',
    customer: {
        id: '8baa6dea-cc70-4748-9b27-b174e70e4b66',
        name: 'Lezlie Stuther',
        address: '19045 Lawn Court',
    },
    order: {
        hat: {
            quantity: 14,
            price: 8,
        },
        cake: {
            quantity: 9,
            price: 3,
        },
        ice: {
            quantity: 10,
            price: 5,
        },
        candy: {
            quantity: 6,
            price: 8,
        },
    },
};
const expectedResponse = {
    id: 1,
    vendor: 'acme',
    date: '03/03/2017',
    customer: '8baa6dea-cc70-4748-9b27-b174e70e4b66',
    order: [
        { item: 'hat', quantity: 14, price: 8, revenue: 112 },
        { item: 'cake', quantity: 9, price: 3, revenue: 27 },
        { item: 'ice', quantity: 10, price: 5, revenue: 50 },
        { item: 'candy', quantity: 6, price: 8, revenue: 48 },
    ],
};
describe('When transformOrders is called', () => {
    test('Given input data, get all the orders with revenue field added', () => {
        const orderList = [];
        const customerId = [];
        const response = transformOrder_1.transformOrders(data, orderList);
        expect(response).toEqual(expectedResponse);
    });
});
