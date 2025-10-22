import { type Emojis } from "./types"
import emojiJson from "./emoji.json" with {type: "json"}
export const emojis: Emojis = emojiJson as Emojis

/** Replace valid emoji names surrounded by astriks with their character equivalent
 * @param input - string to be parsed
 * @example
 * ```typescript
 * console.log(emojify("Hello! *grinning-face*")) // Hello! 😀
 * console.log(emojify("*flamingo**flag:-chad*")) // 🦩🇹🇩
 * ```
 */
export function emojify(input: string): string {
	let output = input

	for (const key of Object.keys(emojis)) {
		output = output.replaceAll(`*${key}*`, emojis[key as keyof Emojis].char)
	}

	return output
}
