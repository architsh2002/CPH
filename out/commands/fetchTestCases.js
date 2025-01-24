"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchTestCases = fetchTestCases;
const vscode = __importStar(require("vscode"));
const fetchUtils_1 = require("../utils/fetchUtils");
async function fetchTestCases() {
    const url = await vscode.window.showInputBox({ prompt: "Enter LeetCode Problem URL" });
    if (!url)
        return vscode.window.showErrorMessage("URL is required.");
    try {
        const testCases = await (0, fetchUtils_1.fetchTestCasesFromLeetCode)(url);
        // Logic to store test cases in local files
        vscode.window.showInformationMessage("Test cases fetched successfully!");
    }
    catch (error) {
        if (error instanceof Error) {
            vscode.window.showErrorMessage("Failed to fetch test cases: " + error.message);
        }
        else {
            vscode.window.showErrorMessage("An unknown error occurred.");
        }
    }
}
//# sourceMappingURL=fetchTestCases.js.map