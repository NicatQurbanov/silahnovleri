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

document.addEventListener('click', e => {
  gunArr.forEach(gun => {
    let keyArr = Object.keys(gun)
    if (e.target.id === gun.model)  {
      buyBtn.classList.remove('inactive')
      gunImg.innerHTML = `<img class="gun-image" src="${gun.src}">`
      descBar.innerHTML  = `<p class="description-paragraph">The ${gun.model} ${gun.text}</p>`
      let charasteristicsText = '';
      keyArr.forEach( key => {
        if (key === "text"|| key === "src"|| key === "hasModifications") {
             return
        }
        charasteristicsText += `<li class="list"><p>${key}:</p><span class="charasteristics-data">${gun[key]}</span></p></li>`
      })
        charasteristics.innerHTML = `<h2>Product description</h2> ${charasteristicsText}`;
      }
    })
    // Secilmis mehsulun "Buy" button uzerine basanda hemis mehsulun qiymeti user-in balansindan cixmalidi
    if (e.target.id === buyBtn.id) {
    let balanceNum = Number(balance.innerHTML)
    console.log(e)
    let priceNum =  Number(gunArr[0].price) 
    // gunArr[0] evezine current secilmis mehsulu Number() icine nece yaza bilerem?????
    if (balanceNum > priceNum) {
      const hh = balanceNum - priceNum
      balance.innerHTML = hh.toString()
      console.log(balance)}}
})





