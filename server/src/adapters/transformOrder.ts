import { InputData, OutputOrderData, OrderDetail } from '../records/';

export const transformOrders = (data: InputData, orderList: OrderDetail[]): OutputOrderData => {
  Object.keys(data.order).map((item) => {
    const OrderItemDetail: OrderDetail = {
      item: item,
      ...data.order[item],
      revenue: data.order[item].price * data.order[item].quantity,
    };
    orderList.push(OrderItemDetail);
  });
  const customerOrderList: OutputOrderData = {
    id: data.id,
    vendor: data.vendor,
    date: data.date,
    customer: data.customer.id,
    order: orderList,
  };
  return customerOrderList;
};
