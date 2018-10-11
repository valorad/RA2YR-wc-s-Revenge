const { readFileSync, writeFileSync } = require("fs")

const config = {
  inputFile: "./Untitled-1.txt",
  outputFile: "./out.txt"
};

const text = readFileSync(config.inputFile, { encoding: "UTF-8" });

const raw = text.split("\n");

// remove redundancy
const clean = [];

for (let word of raw) {
  if (!clean.includes(word)) {
    clean.push(word);
  }
}

let output = "";

for (let word of clean) {
  output = output + "\n" + word;
}

writeFileSync(config.outputFile, output, { encoding: "UTF-8" });
