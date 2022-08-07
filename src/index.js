import _ from 'lodash'
import './style/style.scss'
// import Icon from './icon.png'

import printMe from './js/print.js';



function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button')
    
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello')

    btn.innerHTML = 'Click me and check console!'
    btn.onclick = printMe

    // const myIcon = new Image()
    // myIcon.src = Icon

    // element.appendChild(myIcon)
    element.appendChild(btn)
    element.innerHTML = `<div><ul><li class="pynkt">tip</li><li class="pynkt">tip</li></ul></div>`

    return element;
}

document.body.appendChild(component());