import { InputData, Customer } from '../records/';

export const buildCustomerList = (data: InputData, outputCustomerList: Customer[], customerID: string[]) => {
  const customer: Customer = data.customer;
  if (customerID.indexOf(customer.id) === -1) {
    customerID.push(customer.id);
    outputCustomerList.push(customer);
  }
};
