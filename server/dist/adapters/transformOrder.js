"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformOrders = void 0;
/**
 * Transforms the input order to output order format
 * @param data @param orderList
 * @returns OutputOrderData format data
 */
const transformOrders = (data, orderList) => {
    Object.keys(data.order).map((item) => {
        const OrderItemDetail = Object.assign(Object.assign({ item: item }, data.order[item]), { revenue: data.order[item].price * data.order[item].quantity });
        orderList.push(OrderItemDetail);
    });
    const customerOrderList = {
        id: data.id,
        vendor: data.vendor,
        date: data.date,
        customer: data.customer.id,
        order: orderList,
    };
    return customerOrderList;
};
exports.transformOrders = transformOrders;
