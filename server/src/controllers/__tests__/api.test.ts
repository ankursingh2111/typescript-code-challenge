import request from 'supertest';
import app from '../../index';
import { callApi } from '../../services/callApi';
import { mocked } from 'ts-jest/utils';
import { Customer } from '../../records';
jest.mock('../../services/callApi');
const mockedCallApi = mocked(callApi, true);

let server: any;

beforeAll(async () => {
  server = await app(8000);
});

afterAll(() => {
  return new Promise((resolve) => server.close(resolve));
});

beforeEach(() => {
  mockedCallApi.mockReset();
});

afterAll(() => {});
describe('Check the incoming requests', () => {
  test('When request is made to correct endpoint', async () => {
    mockedCallApi.mockResolvedValue(new Array<Customer>());
    const res = await request(server).get('/api/customers');
    expect(res.body).toEqual([]);
  });
  test('When request is made to non exisitng endpoint', async () => {
    mockedCallApi.mockRejectedValue(new Error('Unknown API: getOrders'));
    const res = await request(server).get('/api/getOrders');
    expect(res.body).toEqual({
      error: 'Not found',
      reason: 'Unknown API: getOrders',
    });
  });
  test('When request is made and there is error', async () => {
    mockedCallApi.mockRejectedValue(new Error('ApiFault'));
    const res = await request(server).get('/api/orders');
    expect(res.body).toEqual({
      error: 'Internal Server Error',
      reason: 'ApiFault',
    });
  });
});
