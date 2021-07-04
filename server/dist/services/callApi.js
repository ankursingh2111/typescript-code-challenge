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
exports.callApi = void 0;
const getCustomers_1 = require("../repositories/getCustomers");
const getOrders_1 = require("../repositories/getOrders");
function callApi(serviceName) {
    return __awaiter(this, void 0, void 0, function* () {
        let data;
        switch (serviceName) {
            case 'customers':
                data = getCustomers_1.getCustomers();
                break;
            case 'orders':
                data = getOrders_1.getOrders();
                break;
            default:
                throw new Error(`Unknown API: ${serviceName}`);
        }
        return data;
    });
}
exports.callApi = callApi;
