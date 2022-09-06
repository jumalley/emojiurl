
const emojies = ['🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔']
​
const animateUrl = () => {
  window.location.hash =
    emojies[Math.floor((Date.now() / 100) % emojies.length)]
​
  setTimeout(animateUrl, 50)
}
​
animateUrl()
