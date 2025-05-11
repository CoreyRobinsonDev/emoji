import type { Emojis } from "./types.ts"
export * from "./types.ts"
export * from "./functions.ts"
export const emojis: Emojis = await Bun.file("./src/emoji.json").json()
