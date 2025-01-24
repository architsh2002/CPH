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
exports.runTestCases = runTestCases;
const vscode = __importStar(require("vscode"));
const execUtils_1 = require("../utils/execUtils");
async function runTestCases() {
    const filePath = await vscode.window.showInputBox({ prompt: "Enter the path to your solution file" });
    if (!filePath)
        return vscode.window.showErrorMessage("File path is required.");
    const languageCommand = "python"; // Or get from user configuration
    try {
        const result = await (0, execUtils_1.runCode)(languageCommand, filePath);
        vscode.window.showInformationMessage("Execution Result:\n" + result);
    }
    catch (error) {
        vscode.window.showErrorMessage("Execution failed: " + error);
    }
}
//# sourceMappingURL=runTestCases.js.map