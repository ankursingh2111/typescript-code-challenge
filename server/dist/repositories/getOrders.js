"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrders = void 0;
const dataStore_1 = require("../adapters/dataStore");
/**
 * Gets the order from dataStore
 */
const getOrders = () => {
    return dataStore_1.dataStore.getData().orders;
};
exports.getOrders = getOrders;
