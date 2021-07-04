"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformData = exports.getAndTransformFileData = void 0;
const readFile_1 = require("./readFile");
const transformOrder_1 = require("./transformOrder");
const transformCustomer_1 = require("./transformCustomer");
/**
 * Transforms the input order to output order format after readind the data from json file
 * @param path path of the file
 * @returns OutputData format data
 */
const getAndTransformFileData = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const inputFileData = yield readFile_1.readJson(path).catch((err) => {
        console.log(err);
        return [];
    });
    return exports.transformData(inputFileData);
});
exports.getAndTransformFileData = getAndTransformFileData;
const transformData = (inputFileData) => __awaiter(void 0, void 0, void 0, function* () {
    const customerID = [];
    const outputCustomerList = [];
    const outputOrderList = [];
    inputFileData.map((data) => {
        let orderList = [];
        const customerOrderList = transformOrder_1.transformOrders(data, orderList);
        transformCustomer_1.buildCustomerList(data, outputCustomerList, customerID);
        outputOrderList.push(customerOrderList);
    });
    return { customers: outputCustomerList, orders: outputOrderList };
});
exports.transformData = transformData;
