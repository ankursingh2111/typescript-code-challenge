"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataStore = void 0;
class dataStore {
    static setData(data) {
        dataStore.transformedData = data;
    }
    static getData() {
        return dataStore.transformedData;
    }
}
exports.dataStore = dataStore;
