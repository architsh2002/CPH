import * as vscode from "vscode";
import { fetchTestCasesFromLeetCode } from "../utils/fetchUtils";

export async function fetchTestCases() {
    // Prompt user to enter a LeetCode problem URL
    const url = await vscode.window.showInputBox({ prompt: "Enter LeetCode Problem URL" });

    // Ensure the URL is provided
    if (!url) {
        return vscode.window.showErrorMessage("URL is required.");
    }

    try {
        // Fetch test cases from LeetCode
        const testCases = await fetchTestCasesFromLeetCode(url);

        // Logic to store test cases in local files (not implemented yet, but you can implement it here)
        // Example: await saveTestCases(testCases.inputs, testCases.outputs, "testcases");

        // Inform the user that test cases were fetched successfully
        vscode.window.showInformationMessage("Test cases fetched successfully!");
    } catch (error: unknown) {
        // Handle errors gracefully
        if (error instanceof Error) {
            vscode.window.showErrorMessage(`Failed to fetch test cases: ${error.message}`);
        } else {
            vscode.window.showErrorMessage("An unknown error occurred.");
        }
    }
}
