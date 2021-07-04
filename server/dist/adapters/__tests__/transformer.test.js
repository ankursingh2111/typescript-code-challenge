"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const transformers_1 = require("../transformers");
const readFile_1 = require("../readFile");
const transformOrder_1 = require("../transformOrder");
const transformCustomer_1 = require("../transformCustomer");
const utils_1 = require("ts-jest/utils");
jest.mock('../transformOrder');
jest.mock('../transformCustomer');
jest.mock('../readFile');
const mockedOrder = utils_1.mocked(transformOrder_1.transformOrders, true);
const mockedCustomer = utils_1.mocked(transformCustomer_1.buildCustomerList, true);
const mockedFile = utils_1.mocked(readFile_1.readJson, true);
const inputData = [
    {
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
    },
];
const orderResponse = {
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
const expectedResponse = {
    customers: [
        {
            id: '8baa6dea-cc70-4748-9b27-b174e70e4b66',
            name: 'Lezlie Stuther',
            address: '19045 Lawn Court',
        },
    ],
    orders: [
        {
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
        },
    ],
};
describe('When input data is read and transformed for output', () => {
    test('Given input file, read and transform data as per output interface', () => __awaiter(void 0, void 0, void 0, function* () {
        mockedFile.mockResolvedValue(new Array());
        const response = yield transformers_1.getAndTransformFileData('server/src/adapters/__tests__/transformer.test.ts');
        expect(response.customers).toEqual([]);
    }));
    test('When wrong filename is provided, empty value of customers and orders', () => __awaiter(void 0, void 0, void 0, function* () {
        mockedFile.mockRejectedValue(new Error('Wrong file name'));
        const response = yield transformers_1.getAndTransformFileData('server/src/adapters/__tests__/transformr.test.ts');
        expect(response.customers).toEqual([]);
    }));
    test('Given InputData, transfor it to required output example', () => __awaiter(void 0, void 0, void 0, function* () {
        mockedCustomer.mockImplementation((data, outputCustomerList, customerId) => {
            outputCustomerList.push({
                id: '8baa6dea-cc70-4748-9b27-b174e70e4b66',
                name: 'Lezlie Stuther',
                address: '19045 Lawn Court',
            });
        });
        mockedOrder.mockReturnValue(orderResponse);
        const response = yield transformers_1.transformData(inputData);
        expect(response).toEqual(expectedResponse);
    }));
});
