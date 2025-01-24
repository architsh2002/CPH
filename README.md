# CPH LeetCode Extension

A Visual Studio Code extension for competitive programming. This extension allows users to fetch test cases from LeetCode, save them locally, and run their solution code against the test cases. It supports multiple programming languages like *C++* and *Python*.

## Features

•⁠  ⁠*Fetch LeetCode Test Cases*: Automatically fetch test cases (input and output) from a given LeetCode problem URL.
•⁠  ⁠*Run Test Cases*: Execute the user's solution code against the fetched test cases and compare the output to the expected results.
•⁠  ⁠*Multi-Language Support: The extension supports both **C++* and *Python* for running solutions.
•⁠  ⁠*Easy to Use*: Simple commands in the Command Palette to fetch test cases and run your code.

## Prerequisites

•⁠  ⁠*Node.js: Make sure you have **Node.js* installed on your machine. If not, download it from [nodejs.org](https://nodejs.org/).
•⁠  ⁠*VSCode: You need **Visual Studio Code* installed. Download it from [here](https://code.visualstudio.com/).
•⁠  ⁠*Clang/LLVM* (for C++): Make sure *Clang* is installed for C++ compilation. If not, install it using [Xcode command line tools](https://developer.apple.com/xcode/).
•⁠  ⁠*Python: Ensure that **Python* is installed to run Python code.

## Installation

### Option 1: Install via VSIX File

1.⁠ ⁠Download the ⁠ .vsix ⁠ file from the repository or build it locally (see below).
2.⁠ ⁠Open VSCode, press ⁠ Ctrl+Shift+P ⁠ (Windows/Linux) or ⁠ Cmd+Shift+P ⁠ (macOS), and search for *"Extensions: Install from VSIX..."*.
3.⁠ ⁠Select the ⁠ .vsix ⁠ file to install the extension.

### Option 2: Clone and Install Manually

1.⁠ ⁠Clone this repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/cph-leetcode-extension.git
  ```
Navigate to the project directory:

cd cph-leetcode-extension

Install the dependencies:

npm install

Compile the TypeScript code:

    npm run compile

    Press F5 to launch the Extension Development Host in VSCode and test the extension.

Usage
1.⁠ ⁠Fetch Test Cases from LeetCode

    Open the Command Palette (Ctrl+Shift+P or Cmd+Shift+P).
    Search for "Fetch Test Cases from LeetCode" and provide the LeetCode problem URL.
    The extension will fetch test cases (input and output) from the LeetCode page and store them in a local folder within your workspace.

2.⁠ ⁠Run Test Cases with Solution Code

    Open the Command Palette (Ctrl+Shift+P or Cmd+Shift+P).
    Search for "Run Test Cases with Solution Code".
    Provide the path to your solution file (C++ or Python).
    The extension will run your solution against the saved test cases and display the results.

Configuration
C++ Compiler

For C++ code, this extension uses Apple Clang (on macOS) or g++ (on Linux/Windows) for compilation. The default configuration is:

"cph.language.cpp.compile": "clang++ -std=c++17 -o $fileNameWithoutExt $fileName"

You can modify this in your VSCode settings or the extension settings if you want to use a different compiler.
Python Interpreter

For Python, the extension uses the Python interpreter to run the code:

"cph.language.python.run": "python3 $fileName"

Ensure that Python 3 is installed and available in your environment.
Testing

    Unit Tests: You can write unit tests for the extension using the Mocha testing framework.
    Running Tests: The extension uses VSCode Test API to run tests. To run the tests, use the npm test command:

    npm test

Contributing

If you'd like to contribute to this project, please follow these steps:

    Fork this repository.
    Clone your fork:

git clone https://github.com/yourusername/cph-leetcode-extension.git

Create a branch for your feature or bug fix:

git checkout -b feature-name

Make changes and commit them:

git commit -m "Add new feature or fix bug"

Push to your fork:

    git push origin feature-name

    Open a pull request to merge your changes into the main repository.


