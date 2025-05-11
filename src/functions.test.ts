import { expect, test } from "bun:test"
import { emojify } from "./functions"
import { emojis } from "."

test("emojify: Hello! grinning-face", () => {
    expect(emojify("Hello! grinning-face")).toBe("Hello! 😀")
})

test("emojify: Hello, world", () => {
    expect(emojify("Hello, world")).toBe("Hello, world")
})

test("emojify: flamingoflag:-chad", () => {
    expect(emojify("flamingoflag:-chad")).toBe("🦩🇹🇩")
})
