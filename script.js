const emojiThemes = [
  ['🌕','🌖','🌗','🌘','🌑','🌒','🌓','🌔'], // Moon phases
  ['☀️','🌤️','⛅','🌥️','☁️','🌦️','🌧️','⛈️'], // Sun & weather
  ['🌈','⚡','🔥','💧','❄️','💨','🌪️','☄️'], // Elements
  ['⭐','🌟','✨','💫','🪐','🌌','🌠','🛸'], // Cosmic
  ['🌸','🌻','🌼','🍀','🍄','🌹','🌷','🌺'], // Nature
  ['🎉','🎊','🎇','🎆','🧨','💥','🎈','🎭'], // Celebration
  ['👾','🤖','🛸','🚀','🪐','🔮','🌀','🧬']  // Sci-fi
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
