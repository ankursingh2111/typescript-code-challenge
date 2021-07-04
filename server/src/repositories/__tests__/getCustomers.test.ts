import { getCustomers } from '../getCustomers';
import { dataStore } from '../../adapters/dataStore';
import { Customer } from 'src/records';

describe('When getCustomer data is retrieved from dataStore', () => {
  test('Customer Data is retrieved', () => {
    const customer: Customer = { name: 'Ankur', id: '1', address: '123' };
    dataStore.setData({ customers: [customer], orders: [] });
    const response = getCustomers();
    expect(response).toEqual([customer]);
  });
});
