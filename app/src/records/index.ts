export interface Customer {
  id: string;
  name: string;
  address: string;
}
export interface GeneralData {
  id?: number;
  vendor: string;
  date: string;
}

export interface OrderInfo extends GeneralData {
  customer: string;
  idField: number | undefined;
}

export interface OrderDetail {
  item: string;
  quantity: number;
  price: number;
  revenue: number;
}

export interface OutputOrderData extends GeneralData {
  customer: string;
  order: OrderDetail[];
}

export interface OrderRowData extends OrderInfo, OrderDetail {}
