import { OrderRowData, OutputOrderData } from '../../records';
import { modifyData } from './reducer';

const orderResponse: OutputOrderData[] = [
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
];

const expectedResponse: OrderRowData[] = [
  {
    idField: 1,
    vendor: 'acme',
    date: '03/03/2017',
    customer: '8baa6dea-cc70-4748-9b27-b174e70e4b66',
    item: 'hat',
    quantity: 14,
    price: 8,
    revenue: 112,
    id: 1,
  },
  {
    idField: 1,
    vendor: 'acme',
    date: '03/03/2017',
    customer: '8baa6dea-cc70-4748-9b27-b174e70e4b66',
    item: 'cake',
    quantity: 9,
    price: 3,
    revenue: 27,
    id: 2,
  },
  {
    idField: 1,
    vendor: 'acme',
    date: '03/03/2017',
    customer: '8baa6dea-cc70-4748-9b27-b174e70e4b66',
    item: 'ice',
    quantity: 10,
    price: 5,
    revenue: 50,
    id: 3,
  },
  {
    idField: 1,
    vendor: 'acme',
    date: '03/03/2017',
    customer: '8baa6dea-cc70-4748-9b27-b174e70e4b66',
    item: 'candy',
    quantity: 6,
    price: 8,
    revenue: 48,
    id: 4,
  },
];

describe('Test Order data manipulation ', () => {
  test('Given Order data, copy common information to all orders', () => {
    const rows = modifyData(orderResponse);
    expect(rows).toEqual(expectedResponse);
  });
});
