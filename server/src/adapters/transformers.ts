import fs from 'fs';
import { readJson } from './readFile';
import { transformOrders } from './transformOrder';
import { buildCustomerList } from './transformCustomer';
import { InputData, OutputOrderData, OutputData, OrderDetail, Customer } from '../records/';

export const getAndTransformFileData = async (path: fs.PathLike) => {
  const inputFileData: InputData[] = await readJson(path).catch((err) => {
    console.log(err);
    return [] as InputData[];
  });
  return transformData(inputFileData);
};

export const transformData = async (inputFileData: InputData[]): Promise<OutputData> => {
  const customerID: string[] = [];
  const outputCustomerList: Customer[] = [];
  const outputOrderList: OutputOrderData[] = [];

  inputFileData.map((data: InputData) => {
    let orderList: OrderDetail[] = [];

    const customerOrderList: OutputOrderData = transformOrders(data, orderList);
    buildCustomerList(data, outputCustomerList, customerID);
    outputOrderList.push(customerOrderList);
  });
  return { customers: outputCustomerList, orders: outputOrderList };
};
