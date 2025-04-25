# 🔁 Emoji URL Animator

A fun little JavaScript script that animates the browser URL hash using random emojis from rotating themed sets — moon phases, sun & weather, cosmic vibes, and more 🌈✨

## 💡 What It Does

This script updates the `window.location.hash` with a random emoji (or two!) at a randomized interval, creating a constantly changing, animated feel using emojis directly in the URL bar.

Themes include:
- 🌕 Moon phases
- ☀️ Sun & weather
- 🌪️ Elements
- 🌌 Cosmic space
- 🌸 Nature
- 🎉 Celebrations
- 👾 Sci-fi & weirdness

## 🚀 How to Use

1. Include the script in any webpage:
```html
<script src="path-to/emojiAnimator.js"></script>
```

2. Or paste directly in the browser console:
```js
const emojiThemes = [
  ['🌕','🌖','🌗','🌘','🌑','🌒','🌓','🌔'],
  ['☀️','🌤️','⛅','🌥️','☁️','🌦️','🌧️','⛈️'],
  ['🌈','⚡','🔥','💧','❄️','💨','🌪️','☄️'],
  ['⭐','🌟','✨','💫','🪐','🌌','🌠','🛸'],
  ['🌸','🌻','🌼','🍀','🍄','🌹','🌷','🌺'],
  ['🎉','🎊','🎇','🎆','🧨','💥','🎈','🎭'],
  ['👾','🤖','🛸','🚀','🪐','🔮','🌀','🧬']
];

const animateUrl = () => {
  const theme = emojiThemes[Math.floor(Math.random() * emojiThemes.length)];
  const emojiCount = Math.random() < 0.3 ? 2 : 1;
  let emojiStr = '';
  for (let i = 0; i < emojiCount; i++) {
    emojiStr += theme[Math.floor(Math.random() * theme.length)];
  }
  window.location.hash = emojiStr;
  const delay = 50 + Math.random() * 100;
  setTimeout(animateUrl, delay);
};

animateUrl();
```

## 🎨 Why?

Because it's fun. Because emojis. Because sometimes your URL bar needs to party too.

## 📦 License

MIT — feel free to use, remix, and share ✨
