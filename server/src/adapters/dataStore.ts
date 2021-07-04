import { OutputData } from 'src/records';

export class dataStore {
  static transformedData: OutputData;

  static setData(data: OutputData) {
    dataStore.transformedData = data;
  }
  static getData(): OutputData {
    return dataStore.transformedData;
  }
}
