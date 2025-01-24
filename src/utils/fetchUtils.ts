import puppeteer from "puppeteer";

export async function fetchTestCasesFromLeetCode(url: string): Promise<{ inputs: string[]; outputs: string[] }> {
    // Launch the Puppeteer browser
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try {
        // Navigate to the LeetCode problem URL
        await page.goto(url, { waitUntil: "networkidle2" });

        // Extract inputs and outputs by analyzing the DOM
        const testCases = await page.evaluate(() => {
            const inputElements = Array.from(document.querySelectorAll("pre")); // Test cases are often in <pre> tags
            const inputs: string[] = [];
            const outputs: string[] = [];

            for (const el of inputElements) {
                const textContent = el.textContent?.trim();
                if (textContent) {
                    // Check if the element contains input or output
                    if (el.previousElementSibling?.textContent?.includes("Input")) {
                        inputs.push(textContent);
                    } else if (el.previousElementSibling?.textContent?.includes("Output")) {
                        outputs.push(textContent);
                    }
                }
            }
            return { inputs, outputs };
        });

        return testCases;
    } catch (error) {
        console.error("Error fetching test cases:", error);
        throw new Error("Failed to fetch test cases. Please ensure the URL is correct and the page structure hasn't changed.");
    } finally {
        // Close the browser
        await browser.close();
    }
}
