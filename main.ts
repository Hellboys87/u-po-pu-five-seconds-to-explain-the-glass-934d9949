import { mkdirSync, writeFileSync } from "node:fs";

const sentence =
  "The glass kept showing a second cat in my house and I do not share my sunbeam with a stranger, so I dealt with the intruder.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", sentence, "utf8");
console.log(sentence);
console.log(`Characters: ${sentence.length}`);
