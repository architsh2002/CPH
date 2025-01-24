import * as fs from "fs-extra";

export async function saveTestCases(inputs: string[], outputs: string[], directory: string) {
    await fs.ensureDir(directory);
    inputs.forEach((input, index) => {
        fs.writeFileSync(`${directory}/input_${index + 1}.txt`, input);
    });
    outputs.forEach((output, index) => {
        fs.writeFileSync(`${directory}/output_${index + 1}.txt`, output);
    });
}