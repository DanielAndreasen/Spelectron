
const remote = require('electron').remote
const main = remote.require('./main.js')

var button = document.createElement('button')
button.textContent = 'Show plots'
button.addEventListener('click', () => {
  main.openWindow()
})
document.body.appendChild(button)
