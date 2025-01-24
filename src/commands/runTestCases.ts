import * as vscode from "vscode";
import { runCode } from "../utils/execUtils";

export async function runTestCases() {
    const filePath = await vscode.window.showInputBox({ prompt: "Enter the path to your solution file" });
    if (!filePath){
         return vscode.window.showErrorMessage("File path is required.");
    }
    const languageCommand = "python"; // Or get from user configuration
    try {
        const result = await runCode(languageCommand, filePath);
        vscode.window.showInformationMessage("Execution Result:\n" + result);
    } catch (error) {
        vscode.window.showErrorMessage("Execution failed: " + error);
    }
}