import { InputData, Customer } from '../../records/';
import { buildCustomerList } from '../transformCustomer';

const data: InputData = {
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
  },
};

describe('When buildCustomer is called', () => {
  test('Given input data, get the customer from it', () => {
    const outputCustomerList: Customer[] = [];
    const customerId: string[] = [];
    buildCustomerList(data, outputCustomerList, customerId);
    expect(customerId[0]).toEqual('8baa6dea-cc70-4748-9b27-b174e70e4b66');
  });
  test('Given input data, when customer is already added, it should not be included again', () => {
    const outputCustomerList: Customer[] = [];
    const customerId: string[] = ['8baa6dea-cc70-4748-9b27-b174e70e4b66'];
    buildCustomerList(data, outputCustomerList, customerId);
    expect(customerId.length).toEqual(1);
  });
});
