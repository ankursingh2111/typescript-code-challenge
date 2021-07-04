import { dataStore } from '../adapters/dataStore';

/**
 * Gets the order from dataStore
 */

export const getOrders = () => {
  return dataStore.getData().orders;
};
