"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupRoutesFor = void 0;
const express_1 = require("express");
const api_1 = __importDefault(require("./controllers/api"));
// API Controller
const apiRouter = express_1.Router();
apiRouter.get('/:service', api_1.default);
const setupRoutesFor = (app) => {
    app.use('/api', apiRouter);
};
exports.setupRoutesFor = setupRoutesFor;
