export interface ErrorResponse {
  error: string;
  reason: string;
}

export interface Customer {
  id: string;
  name: string;
  address: string;
}

export interface Order {
  quantity: number;
  price: number;
}

export interface InputOrder {
  [key: string]: Order;
}

export interface OrderDetail {
  item: string;
  quantity: number;
  price: number;
  revenue: number;
}

export interface GeneralData {
  id: number;
  vendor: string;
  date: string;
}

export interface OutputOrderData extends GeneralData {
  customer: string;
  order: OrderDetail[];
}
export interface InputData extends GeneralData {
  customer: Customer;
  order: InputOrder;
}

export interface OutputData {
  customers: Customer[];
  orders: OutputOrderData[];
}
