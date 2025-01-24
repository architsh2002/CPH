import { exec } from "child_process";

export function runCode(languageCommand: string, filePath: string): Promise<string> {
    return new Promise((resolve, reject) => {
        exec(`${languageCommand} ${filePath}`, (error, stdout, stderr) => {
            if (error) {
                return reject(stderr);
            }
            resolve(stdout);
        });
    });
}