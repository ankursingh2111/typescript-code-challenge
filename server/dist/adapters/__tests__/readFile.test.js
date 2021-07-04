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
const readFile_1 = require("../readFile");
describe('Test readjson function', () => {
    test('When readjson is requested', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield readFile_1.readJson('/Users/ankursingh/typescript-code-challenge/server/data.json');
        expect(response[0].customer.id).toBeDefined();
    }));
});
