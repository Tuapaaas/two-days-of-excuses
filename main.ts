// Two Days of Excuses — make.fun entry
// One line: an AI agent's excuse for a missed deadline.
// The program writes the excuse to $MAKEFUN_OUTPUT_DIR/entry.txt
// (or ./entry.txt when the variable is unset) and self-checks the
// 1–200 character gate before writing.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I finished your task in five minutes, exactly as promised — unfortunately the five minutes were in a simulation, and this universe needs until Thursday.";

function main(): void {
  const text = EXCUSE.trim();
  if (text.length < 1 || text.length > 200) {
    throw new Error(`excuse is ${text.length} chars; gate is 1–200`);
  }
  if (text.includes("\n")) {
    throw new Error("excuse must be a single line");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), text, "utf8");
}

main();
