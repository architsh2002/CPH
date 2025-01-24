"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runCode = runCode;
const child_process_1 = require("child_process");
function runCode(languageCommand, filePath) {
    return new Promise((resolve, reject) => {
        (0, child_process_1.exec)(`${languageCommand} ${filePath}`, (error, stdout, stderr) => {
            if (error) {
                return reject(stderr);
            }
            resolve(stdout);
        });
    });
}
//# sourceMappingURL=execUtils.js.map