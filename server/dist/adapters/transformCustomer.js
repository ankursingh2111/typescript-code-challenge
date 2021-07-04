"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildCustomerList = void 0;
const buildCustomerList = (data, outputCustomerList, customerID) => {
    const customer = data.customer;
    if (customerID.indexOf(customer.id) === -1) {
        customerID.push(customer.id);
        outputCustomerList.push(customer);
    }
};
exports.buildCustomerList = buildCustomerList;
