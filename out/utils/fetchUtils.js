"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchTestCasesFromLeetCode = fetchTestCasesFromLeetCode;
const puppeteer_1 = __importDefault(require("puppeteer"));
async function fetchTestCasesFromLeetCode(url) {
    const browser = await puppeteer_1.default.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const testCases = await page.evaluate(() => {
        const inputs = Array.from(document.querySelectorAll(".input-class"), el => el.textContent || "");
        const outputs = Array.from(document.querySelectorAll(".output-class"), el => el.textContent || "");
        return { inputs, outputs };
    });
    await browser.close();
    return testCases;
}
//# sourceMappingURL=fetchUtils.js.map