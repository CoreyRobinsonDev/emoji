import { expect, test } from "bun:test"
import { emojify } from "./functions"
import { emojis } from "."

test("emojify: Hello! *grinning-face*", () => {
    expect(emojify("Hello! *grinning-face*")).toBe("Hello! 😀")
})

test("emojify: Hello, world", () => {
    expect(emojify("Hello, world")).toBe("Hello, world")
})

test("emojify: Give a man a hand", () => {
    expect(emojify("Give a man a hand")).toBe("Give a man a hand")
})

test("emojify: Give a *man* a *hand*", () => {
    expect(emojify("Give a *man* a *hand*")).toBe("Give a 👨 a *hand*")
})

test("emojify: *flamingo**flag:-chad*", () => {
    expect(emojify("*flamingo**flag:-chad*")).toBe("🦩🇹🇩")
})
