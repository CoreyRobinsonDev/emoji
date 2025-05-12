import emojiJson from "./src/emoji.json" with {type: "json"}
import type { Emojis } from "./src/types.ts"
export * from "./src/types.ts"
export * from "./src/functions.ts"
export const emojis: Emojis = emojiJson as Emojis
