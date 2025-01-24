"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultConfig = void 0;
exports.defaultConfig = {
    cpp: {
        compile: "g++ -std=c++17 -o $fileNameWithoutExt $fileName",
        run: "./$fileNameWithoutExt",
    },
    python: {
        run: "python $fileName",
    },
};
//# sourceMappingURL=defaultConfig.js.map