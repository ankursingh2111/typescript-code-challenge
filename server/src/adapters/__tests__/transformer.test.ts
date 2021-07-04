import { transformData, getAndTransformFileData } from '../transformers';
import { readJson } from '../readFile';
import { transformOrders } from '../transformOrder';
import { buildCustomerList } from '../transformCustomer';
import { InputData, OutputOrderData, OutputData, OrderDetail, Customer } from '../../records/';
import { mocked } from 'ts-jest/utils';

jest.mock('../transformOrder');
jest.mock('../transformCustomer');
jest.mock('../readFile');

const mockedOrder = mocked(transformOrders, true);
const mockedCustomer = mocked(buildCustomerList, true);
const mockedFile = mocked(readJson, true);

const inputData: InputData[] = [
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

const orderResponse: OutputOrderData = {
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
  test('Given input file, read and transform data as per output interface', async () => {
    mockedFile.mockResolvedValue(new Array<InputData>());

    const response: OutputData = await getAndTransformFileData('server/src/adapters/__tests__/transformer.test.ts');
    expect(response.customers).toEqual([]);
  });
  test('When wrong filename is provided, empty value of customers and orders', async () => {
    mockedFile.mockRejectedValue(new Error('Wrong file name'));

    const response: OutputData = await getAndTransformFileData('server/src/adapters/__tests__/transformr.test.ts');
    expect(response.customers).toEqual([]);
  });
  test('Given InputData, transfor it to required output example', async () => {
    mockedCustomer.mockImplementation((data: InputData, outputCustomerList: Customer[], customerId: string[]) => {
      outputCustomerList.push({
        id: '8baa6dea-cc70-4748-9b27-b174e70e4b66',
        name: 'Lezlie Stuther',
        address: '19045 Lawn Court',
      });
    });
    mockedOrder.mockReturnValue(orderResponse);
    const response: OutputData = await transformData(inputData);
    expect(response).toEqual(expectedResponse);
  });
});
