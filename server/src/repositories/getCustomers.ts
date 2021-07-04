import { dataStore } from '../adapters/dataStore';
export const getCustomers = () => {
  return dataStore.getData().customers;
};
