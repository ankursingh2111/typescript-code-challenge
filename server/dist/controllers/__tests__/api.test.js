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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../../index"));
const callApi_1 = require("../../services/callApi");
const utils_1 = require("ts-jest/utils");
jest.mock('../../services/callApi');
const mockedCallApi = utils_1.mocked(callApi_1.callApi, true);
let server;
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    server = yield index_1.default(8000);
}));
afterAll(() => {
    return new Promise((resolve) => server.close(resolve));
});
beforeEach(() => {
    mockedCallApi.mockReset();
});
afterAll(() => { });
describe('Check the incoming requests', () => {
    test('When request is made to correct endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        mockedCallApi.mockResolvedValue(new Array());
        const res = yield supertest_1.default(server).get('/api/customers');
        expect(res.body).toEqual([]);
    }));
    test('When request is made to non exisitng endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        mockedCallApi.mockRejectedValue(new Error('Unknown API: getOrders'));
        const res = yield supertest_1.default(server).get('/api/getOrders');
        expect(res.body).toEqual({
            error: 'Not found',
            reason: 'Unknown API: getOrders',
        });
    }));
    test('When request is made and there is error', () => __awaiter(void 0, void 0, void 0, function* () {
        mockedCallApi.mockRejectedValue(new Error('ApiFault'));
        const res = yield supertest_1.default(server).get('/api/orders');
        expect(res.body).toEqual({
            error: 'Internal Server Error',
            reason: 'ApiFault',
        });
    }));
});
