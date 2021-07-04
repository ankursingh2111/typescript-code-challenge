import { InputData, Customer } from '../records/';
/**
 * Transforms the customer to customerlist
 * @param data @param outputCustomerList @param customerID
 * @returns Pushes the customer info in outputCustomerList
 */

export const buildCustomerList = (data: InputData, outputCustomerList: Customer[], customerID: string[]) => {
  const customer: Customer = data.customer;
  if (customerID.indexOf(customer.id) === -1) {
    customerID.push(customer.id);
    outputCustomerList.push(customer);
  }
};
