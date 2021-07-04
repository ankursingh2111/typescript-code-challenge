import { getCustomers } from '../repositories/getCustomers';
import { getOrders } from '../repositories/getOrders';
import { Customer, OutputOrderData } from 'src/records';

/**
 * Calls the dataStore based on the serviceName
 * @param serviceName customer or orders endpoint call.
 * @returns An array of Customers or Orders.
 */

export async function callApi(serviceName: string): Promise<Customer[] | OutputOrderData[]> {
  let data: Customer[] | OutputOrderData[];
  switch (serviceName) {
    case 'customers':
      data = getCustomers();
      break;
    case 'orders':
      data = getOrders();
      break;
    default:
      throw new Error(`Unknown API: ${serviceName}`);
  }
  return data;
}
