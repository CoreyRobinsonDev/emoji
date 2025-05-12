import { readFileSync } from "fs"
import type { Emojis } from "./src/types.ts"
export * from "./src/types.ts"
export * from "./src/functions.ts"
export const emojis: Emojis = JSON.parse(readFileSync("./src/emoji.json", "utf-8"))
