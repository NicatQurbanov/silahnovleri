import { gunArr } from './Data/data.js'
const gunList = document.getElementById('gun-list')
const gunImg = document.getElementById('img-container')
const descBar = document.getElementById('description-bar')
const charasteristics = document.getElementById('charasteristics')
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
      charasteristics.innerHTML =
      `<h2>Product description</h2>
          <li><p>Model:</p><span class="charasteristics-data">${gun.model}</span></li>
          <li><p>Type:</p><span class="charasteristics-data">${gun.type}</span></li>
          <li><p>Caliber:</p><span class="charasteristics-data">${gun.caliber}mm</span></li>
          <li><p>Weight:</p><span class="charasteristics-data">${gun.weight}kg</span></li>
          <li><p>Magazine:</p><span class="charasteristics-data">${gun.magazine}</span></li>
          <li><p>Max range:</p><span class="charasteristics-data">${gun.rangeMax}m</span></li>
          <li><p>Modifications:</p><span class="charasteristics-data">${gun.modifications}</span></li>
          <li><p>Price:</p><span class="charasteristics-data">${gun.price}$</span></p></li>`
      }
  })
})


gunList.innerHTML = arrList;






