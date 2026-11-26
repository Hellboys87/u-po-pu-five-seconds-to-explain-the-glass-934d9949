import { mkdirSync, writeFileSync } from "node:fs";

const sentence =
  "The glass kept showing a second cat in my house and I do not share my sunbeam with a stranger, so I dealt with the intruder.";

const charCount = [...sentence].length;
if (sentence.trim() === "") throw new Error("sentence is empty");
if (sentence.includes("\n")) throw new Error("sentence must be a single line");
if (charCount > 200) throw new Error(`sentence too long: ${charCount} chars (max 200)`);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", sentence, "utf8");
console.log(sentence);
console.log(`Characters: ${sentence.length}`);
