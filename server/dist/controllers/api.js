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
const callApi_1 = require("../services/callApi");
function get(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = [];
        let errorResponse = {};
        let status = 200;
        try {
            // Get response from repository
            response = yield callApi_1.callApi(req.params.service);
        }
        catch (err) {
            if (err.message.startsWith('Unknown API')) {
                // An error has occured. Report that.
                status = 404;
                errorResponse = {
                    error: 'Not found',
                    reason: err.message,
                };
            }
            else {
                // An error has occured. Report that.
                status = 500;
                errorResponse = {
                    error: 'Internal Server Error',
                    reason: err.message,
                };
            }
        }
        if (status !== 200)
            res.json(errorResponse);
        else
            res.json(response);
        res.status(status);
    });
}
exports.default = get;
