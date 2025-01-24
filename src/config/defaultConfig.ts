export const defaultConfig = {
    cpp: {
        compile: "g++ -std=c++17 -o $fileNameWithoutExt $fileName",
        run: "./$fileNameWithoutExt",
    },
    python: {
        run: "python $fileName",
    },
};
