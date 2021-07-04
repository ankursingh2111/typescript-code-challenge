import { dataStore } from '../adapters/dataStore';
export const getOrders = () => {
  return dataStore.getData().orders;
};
