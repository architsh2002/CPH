import * as vscode from "vscode";
import { fetchTestCases } from "./commands/fetchTestCases";
import { runTestCases } from "./commands/runTestCases";

export function activate(context: vscode.ExtensionContext) {
    const fetchCommand = vscode.commands.registerCommand("cph.fetchTestCases", fetchTestCases);
    const runCommand = vscode.commands.registerCommand("cph.runTestCases", runTestCases);

    context.subscriptions.push(fetchCommand, runCommand);

    console.log("Commands registered");
}

export function deactivate() {}