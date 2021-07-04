"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const transformers_1 = require("./adapters/transformers");
const dataStore_1 = require("./adapters/dataStore");
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const run = (port) => {
    const app = express_1.default();
    app.use(cors_1.default());
    routes_1.setupRoutesFor(app);
    transformers_1.getAndTransformFileData(path_1.default.resolve('../server/data.json')).then((data) => {
        dataStore_1.dataStore.setData(data);
    });
    return new Promise((resolve) => {
        const server = app.listen(port, () => {
            resolve(server);
        });
    });
};
exports.default = run;
/* istanbul ignore next */
if (require.main === module) {
    run(8080);
}
