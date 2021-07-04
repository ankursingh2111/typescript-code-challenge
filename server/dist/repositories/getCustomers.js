"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCustomers = void 0;
const dataStore_1 = require("../adapters/dataStore");
/**
 * Gets the customers from dataStore
 */
const getCustomers = () => {
    return dataStore_1.dataStore.getData().customers;
};
exports.getCustomers = getCustomers;
