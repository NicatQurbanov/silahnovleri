import { gunArr } from './Data/data.js'
const gunList = document.getElementById('gun-list')
const gunImg = document.getElementById('img-container')
const descBar = document.getElementById('description-bar')
const charasteristics = document.getElementById('charasteristics')
const balance = document.getElementById('balance-num')
const buyBtn = document.getElementById('buy-btn')

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

gunList.innerHTML = arrList;
let selectedGun = null;

document.addEventListener('click', e => {
  gunArr.forEach(gun => {
    let keyArr = Object.keys(gun)
    if (e.target.id === gun.model)  {
      selectedGun = gun;
      buyBtn.classList.remove('inactive')
      gunImg.innerHTML = `<img class="gun-image" src="${gun.src}">`
      descBar.innerHTML  = `<p class="description-paragraph">The ${gun.model} ${gun.text}</p>`
      let charasteristicsText = '';
      keyArr.forEach( key => {
        if (key === "text"|| key === "src"|| key === "hasModifications") {
            return
        }
        charasteristicsText += `<li class="margin-top list "><p>${key}:</p><span class="charasteristics-data">${gun[key]}</span></li>`
      })
        charasteristics.innerHTML = `<h2>Product description</h2> ${charasteristicsText}`;
      }
    })
    if (e.target.id === buyBtn.id && selectedGun) {
      const balanceNum = Number(balance.innerHTML)
      const priceNum = Number(selectedGun.price)
      if (balanceNum >= priceNum) {
        const newBalance = balanceNum - priceNum;
        balance.innerHTML = newBalance;
      } 
    }
})




