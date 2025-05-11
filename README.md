# emoji

Simple library of emojis

## Installation
```bash
npm i @coreyrobinsondev/emoji
```

## Usage
- Access to an object of all unicode emojis
```typescript
import { emojis } from "@coreyrobinsondev/emoji"

emojis["grinning-face"].name        // "grinning face"
emojis["grinning-face"].char        // "😀"
emojis["grinning-face"].unicode     // ["1f600"]
emojis["grinning-face"].emojiBlob   // ...Base64 encoded png of the emoji

```

- Convert emoji names to their character counterpart 
```typescript
import { emojify } from "@coreyrobinsondev/emoji"

 console.log(emojify("Hello! grinning-face")) // Hello! 😀
 console.log(emojify("flamingoflag:-chad")) // 🦩🇹🇩
```

## License
[MIT License](./LICENSE)
