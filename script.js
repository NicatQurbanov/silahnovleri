import { gunArr } from './Data/data.js'
let arrList = '';
gunArr.forEach(gun => {
  arrList += `
    <li >
    <button class="gun-items">
    ${gun.model}
    </button>
    </li>`;
})
document.getElementById('gun-list').innerHTML = arrList;




