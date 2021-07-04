import { OrderDetail, OrderInfo, OrderRowData, OutputOrderData } from '../../records';

export const modifyData = (orderData: OutputOrderData[]): OrderRowData[] => {
  let count = 1;
  const orderRowData: OrderRowData[] = [];
  orderData.map((data: OutputOrderData) => {
    const orderInfo: OrderInfo = {
      idField: data.id,
      vendor: data.vendor,
      date: data.date,
      customer: data.customer,
    };
    data.order.map((order: OrderDetail) => {
      const rowData: OrderRowData = { ...orderInfo, ...order, id: count };
      orderRowData.push(rowData);
      count++;
      return undefined;
    });
    return undefined;
  });
  return orderRowData;
};
