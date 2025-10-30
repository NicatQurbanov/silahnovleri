import { gunArr } from './Data/data.js'
const gunList = document.getElementById('gun-list')
const gunImg = document.getElementById('img-container')
const descBar = document.getElementById('description-bar')
let arrList = '';
gunArr.forEach(gun => {
  arrList += `
    <li >
    <button class="gun-items" id="${gun.model}">
    ${gun.model}
    </button>
    </li>
    `;
})
document.addEventListener('click', function(e){
  gunArr.forEach(gun => {
    if (e.target.id === gun.model)  {
      gunImg.innerHTML = `<img class="gun-image" src="${gun.src}">`
      descBar.innerHTML  = `<p class="description-paragraph">The ${gun.model} ${gun.text}</p>`
      }
  })
})


gunList.innerHTML = arrList;






