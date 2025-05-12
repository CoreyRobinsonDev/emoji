import { emojis, type Emojis } from ".."

/** Replace valid emoji names with their character equivalent
 * @param input - string to be parsed
 * @example
 * ```typescript
 * console.log(emojify("Hello! grinning-face")) // Hello! 😀
 * console.log(emojify("flamingoflag:-chad")) // 🦩🇹🇩
 * ```
 */
export function emojify(input: string): string {
    const output = input.split(" ")
        .map(word => emojis[word as keyof Emojis] ? emojis[word as keyof Emojis].char : word)
        .join(" ")

    if (input === output) {
        for (const key of Object.keys(emojis)) {
            input = input.replaceAll(key, emojis[key as keyof Emojis].char)
        }
        return input
    } else {
        return output
    }
}
