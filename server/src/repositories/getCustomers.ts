import { dataStore } from '../adapters/dataStore';

/**
 * Gets the customers from dataStore
 */
export const getCustomers = () => {
  return dataStore.getData().customers;
};
