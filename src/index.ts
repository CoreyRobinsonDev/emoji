import { readFileSync } from "fs"
import type { Emojis } from "./types.ts"
export * from "./types.ts"
export * from "./functions.ts"
export const emojis: Emojis = JSON.parse(readFileSync("./src/emoji.json", "utf-8"))
