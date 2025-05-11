export type EmojiMap = {
    [U: string]: {
        name: string;
        unicode: string[];
        emojiBlob: string;
        char: string;
    }
}
