/**
 * Hello Toolkit !
 * */
let node_h1 = document.createElement('h1');
node_h1.innerText = 'Hello Toolkit !';
node_h1.style.textAlign = 'center';
document.body.appendChild(node_h1);
document.body.appendChild(document.createElement('hr'));

/**
 * testing log
 * */
import log from './src/log';
log(1, 2, 4, 5, 3242);

/**
 * testing btnWater
 */
import btnWater from './src/btnWater';
import './src/btnWater.css';
btnWater('btnWater');

let inlineBlockBtn = document.createElement('span');
inlineBlockBtn.innerText = '水波纹按钮';
inlineBlockBtn.className = 'btnWater';
document.body.appendChild(inlineBlockBtn);
document.body.appendChild(document.createElement('hr'));
