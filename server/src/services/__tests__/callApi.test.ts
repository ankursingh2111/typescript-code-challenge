import { callApi } from '../callApi';
import { getCustomers } from '../../repositories/getCustomers';
import { getOrders } from '../../repositories/getOrders';
import { mocked } from 'ts-jest/utils';
import { OutputOrderData, Customer } from 'src/records';

jest.mock('../../repositories/getCustomers');
jest.mock('../../repositories/getOrders');
const mockedCustomer = mocked(getCustomers, true);
const mockedOrder = mocked(getOrders, true);

describe('Test the different services', () => {
  test('When getCustomer service is called', async () => {
    const customer: Customer = { name: 'Ankur', id: '1', address: '123' };
    mockedCustomer.mockReturnValue([customer]);
    const response = await callApi('customers');
    expect(response).toEqual([customer]);
  });
  test('When getOrders service is called', async () => {
    mockedOrder.mockReturnValue(new Array<OutputOrderData>());
    const response = await callApi('orders');
    expect(response).toEqual(new Array<OutputOrderData>());
  });

  test('When non exisiting service is called', async () => {
    expect(callApi('getOrders')).rejects.toThrow('Unknown API');
  });
});
