
const remote = require('electron').remote
const main = remote.require('./main.js')

var button = document.reateElement('button')
button.textContent = 'Open window'
button.addEventListener('click', () => {
  main.openWindow()
})
document.body.appendChild(button)