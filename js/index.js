const main = document.querySelector('main');
let html = ``;
const breakfastCard = document.getElementsByClassName('breakfast');
const lunchCard = document.getElementsByClassName('lunch');
const shakeCard = document.getElementsByClassName('shakes');
const dinnerCard = document.getElementsByClassName('dinner');

// Buttons
const btnAll = document.querySelector('#btnAll');
const btnBreak = document.querySelector('#btnBreak');
const btnLunch = document.querySelector('#btnLunch');
const btnDinner = document.querySelector('#btnDinner');
const btnShake = document.querySelector('#btnShakes');


// -function for getting an menu item
// -Displaying all the items in the menu at load
function createMenuHtml(menuArray){
  return `
          <div class="${menuArray.type}">
            <div class="card">
              <img src="${menuArray.imgSrc}" alt="${menuArray.itemName}">
              <div class="inner-card">
                <div class="card-header">
                  <h3>${menuArray.itemName}</h3>
                  <span>${menuArray.price}</span>
                </div>
                  <p>${menuArray.description}</p>
              </div>
            </div>
          </div>
        `
}


for(let i = 0; i < menuArray.length; i++){
  html += createMenuHtml(menuArray[i]);
}

main.insertAdjacentHTML("afterbegin", html);

// _____________________________________________
// Functions for showing and hiding menu items
// _____________________________________________

function showCards(menuItems){
  for(let i = 0; i < menuItems.length;i++){
    menuItems[i].style.display = 'block';
  }
  console.log(menuItems[0]);
}

function hideCards(menuItems){
  for(let i = 0; i < menuItems.length;i++){
    menuItems[i].style.display= 'none';
    
    
  }
}


// _____________________________________________
//      Buttons
// _____________________________________________

// -Displaying ALL BUTTON the items in the menu

btnAll.addEventListener('click', ()=>{
  showCards(breakfastCard);
  showCards(lunchCard);
  showCards(shakeCard);
  showCards(dinnerCard);
});


// -Displaying Breakfast items on the menu

btnBreak.addEventListener('click', ()=>{
  showCards(breakfastCard);
  hideCards(lunchCard);
  hideCards(shakeCard);
  hideCards(dinnerCard);
});

// -Displaying launch items on the menu

btnLunch.addEventListener('click', ()=>{
  hideCards(breakfastCard);
  showCards(lunchCard);
  hideCards(shakeCard);
  hideCards(dinnerCard);
});


// -Displaying Shakes items on the menu

btnShake.addEventListener('click', ()=>{
  hideCards(breakfastCard);
  hideCards(lunchCard);
  showCards(shakeCard);
  hideCards(dinnerCard);
});

// -Displaying Dinner items on the menu

btnDinner.addEventListener('click', ()=>{
  hideCards(breakfastCard);
  hideCards(lunchCard);
  hideCards(shakeCard);
  showCards(dinnerCard);
});






