import { getOrders } from '../getOrders';
import { dataStore } from '../../adapters/dataStore';

describe('When getCustomer data is retrieved from dataStore', () => {
  test('Customer Data is retrieved', () => {
    dataStore.setData({ customers: [], orders: [] });
    const response = getOrders();
    expect(response).toEqual([]);
  });
});
