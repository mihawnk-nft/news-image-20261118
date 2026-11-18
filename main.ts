// Entry program for the news-image-20261118 bounty.
// It places the prepared picture of 18 November 2026 world news
// into the grader's output directory, byte for byte.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(repoDir, "entry.png"), join(outputDir, "entry.png"));

// Refuse a silent empty copy: the grader must see the real picture.
const copied = statSync(join(outputDir, "entry.png"));
if (copied.size === 0) throw new Error("entry.png copied empty");
