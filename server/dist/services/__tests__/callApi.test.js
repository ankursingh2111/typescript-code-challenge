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
const callApi_1 = require("../callApi");
const getCustomers_1 = require("../../repositories/getCustomers");
const getOrders_1 = require("../../repositories/getOrders");
const utils_1 = require("ts-jest/utils");
jest.mock('../../repositories/getCustomers');
jest.mock('../../repositories/getOrders');
const mockedCustomer = utils_1.mocked(getCustomers_1.getCustomers, true);
const mockedOrder = utils_1.mocked(getOrders_1.getOrders, true);
describe('Test the different services', () => {
    test('When getCustomer service is called', () => __awaiter(void 0, void 0, void 0, function* () {
        const customer = { name: 'Ankur', id: '1', address: '123' };
        mockedCustomer.mockReturnValue([customer]);
        const response = yield callApi_1.callApi('customers');
        expect(response).toEqual([customer]);
    }));
    test('When getOrders service is called', () => __awaiter(void 0, void 0, void 0, function* () {
        mockedOrder.mockReturnValue(new Array());
        const response = yield callApi_1.callApi('orders');
        expect(response).toEqual(new Array());
    }));
    test('When non exisiting service is called', () => __awaiter(void 0, void 0, void 0, function* () {
        expect(callApi_1.callApi('getOrders')).rejects.toThrow('Unknown API');
    }));
});
