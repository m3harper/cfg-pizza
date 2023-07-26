// save pizza choices to object in local storage
let pizza = {
  base: { type: "",
          cost: 0
        },
  top1: { type: "",
          cost: 0
        },
  top2: { type: "",
          cost: 0
        },
  top3: { type: "",
          cost: 0
        },
  top4: { type: "",
          cost: 0
        }
  } || JSON.parse(localStorage.getItem('pizza')) ;

localStorage.setItem('pizza', JSON.stringify(pizza));


// function to hide food dropdown lists and disable buttons until allergy info is submitted
function hideAndDisable() {
  const foodList = document.getElementsByClassName("food");
  for (let i = 0; i < foodList.length; i++) {
    foodList[i].classList.add("hide-me");
  }
  const orderButton = document.getElementById('submit-order');
  orderButton.classList.add("hide-me");

  const resetButton = document.getElementById('reset-order');
  resetButton.classList.add("hide-me");

  const randomizerBtn = document.getElementById('random-btn');
  randomizerBtn.disabled = true;

  const createBtn = document.getElementById('create-btn');
  createBtn.disabled = true;
};

// function is called immediately
hideAndDisable();

// adds an event listener then calls specific functions to remove alergens based on user input
const allergy = document.getElementById("allergy");

allergy.addEventListener("change", getAllergy) 
  
function getAllergy() {
  if (allergy.value === "Nut") {
    noNuts();
  } else if (allergy.value === "Dairy") {
    noDairy();
  } else if (allergy.value === "Shellfish") {
    noShellfish();
  } else if (allergy.value === "Gluten") {
    noGluten();
  } else if (allergy.value === "None") {
    addCreateBtns();
  }
};

function noNuts() {
  addCreateBtns();
  const nuts = document.getElementById("base");
  // remove bbq base
  nuts.remove(3);
  const nuts2 = document.getElementById("top3");
  // remove pepperoni
  nuts2.remove(1);
  // remove pulled pork
  nuts2.remove(2);
}

function noDairy() {
  addCreateBtns();
  const dairy = document.getElementById("base");
  // remove white sauce
  dairy.remove(2);
  const dairy2 = document.getElementById("top1");
  // remove mozzerella
  dairy2.remove(1);
  // remove gouda
  dairy2.remove(1);
  // remove cheddar
  dairy2.remove(1);
}

function noShellfish() {
  addCreateBtns();
  const shellfish = document.getElementById("top3");
  // remove tuna
  shellfish.remove(5);
}

function noGluten() {
  addCreateBtns();
  const gluten = document.getElementById("base");
  // remove tomato
  gluten.remove(1);
  // remove white sauce 
  gluten.remove(1);
  // remove bbq
  gluten.remove(1);
}

const randomizerBtn = document.getElementById('random-btn');
const createBtn = document.getElementById('create-btn');

// removes disabled button and allow user to click
function addCreateBtns() {
  randomizerBtn.disabled = false;
  createBtn.disabled = false;
}

function addOrderBTN2() {
  const order2 = document.getElementById('order-2')
  order2.classList.remove('hide-me')
  order2.classList.add('order2-btn')

  const pickAgain = document.getElementById('pick-btn')
  pickAgain.classList.remove('hide-me')
  pickAgain.classList.add('pick-again-btn')
}

// function removes allergy dropdown list
function removeAllergy() {
  const allergyDropdown = document.getElementById("allergy");
  allergyDropdown.classList.add("hide-me");
  const allergyLabel = document.getElementById("allergy-label")
  allergyLabel.classList.add("hide-me");
}

// function removes intro p element
function removeIntro() {
  const intro = document.getElementById('intro')
  intro.classList.add('hide-me');
}

// function removes create and randomizer buttons
function removeBtns() {
  randomizerBtn.classList.remove('random-btn');
  randomizerBtn.classList.add('hide-me');
  createBtn.classList.remove('create-btn');
  createBtn.classList.add('hide-me');
}

// removes allergy dropdown, buttons and intro p element after click and creates random pizza
randomizerBtn.addEventListener('click', function() {
  const table = document.getElementById('food-table')
  table.classList.add('hide-me')
  removeAllergy();
  removeIntro();
  removeBtns();
  addOrderBTN2();
});

// removes allergy dropdown, buttons and intro p element after click and adds food dropdown lists
createBtn.addEventListener('click', function() {
  removeAllergy();
  removeIntro();
  removeBtns();
  addFood();
  addOrderBTN();
  addResetBTN();
});


// random selection function
function randomizer() {
  const randomBase = Math.random()

  if (randomBase < 0.2 && allergy.value !== "Gluten") {
    base.style.backgroundColor = "#c44900";
    base.classList.add('base-style');
    pizza.base.type = "Tomato"
    pizza.base.cost = 1;

  } else if (randomBase > 0.2 && randomBase < 0.4 && allergy.value !== "Dairy" && allergy.value !== "Gluten") {
    base.style.backgroundColor = "rgb(252, 241, 186)";
    base.classList.add('base-style');
    pizza.base.type = "White Sauce"
    pizza.base.cost = 1;

  } else if (randomBase > 0.4 && randomBase < 0.6 && allergy.value !== "Gluten" && allergy.value !== "Nut") {
    base.style.backgroundColor = "rgb(139, 43, 12)";
    base.classList.add('base-style');
    pizza.base.type = "BBQ Sauce"
    pizza.base.cost = 1;

  } else {
    base.style.backgroundColor = "#5c7751";
    base.classList.add('base-style')
    pizza.base.type = "CFG Special";
    pizza.base.cost = 2;
  }
  const randomTop1 = Math.random() 
  const top1Space = document.getElementById('top1-space');

  if (randomTop1 < 0.2 && allergy.value !== "Dairy") {
    top1Space.innerHTML = "🧀"
    top1Space.classList.add('top1-img');
    pizza.top1.type = "Mozzerella"
    pizza.top1.cost = 2

  } else if (randomTop1 > 0.2 && randomTop1 < 0.4 && allergy.value !== "Dairy") {
    top1Space.innerHTML = "🧀"
    top1Space.classList.add('top1-img');
    pizza.top1.type = "Gouda"
    pizza.top1.cost = 2

  } else if (randomTop1 > 0.4 && randomTop1 < 0.6 && allergy.value !== "Dairy") {
    top1Space.innerHTML = "🧀"
    top1Space.classList.add('top1-img');
    pizza.top1.type = "Cheddar"
    pizza.top1.cost = 2

  } else {
    top1Space.innerHTML = "🧀"
    top1Space.classList.add('top1-img');
    pizza.top1.type = "Lacto Free"
    pizza.top1.cost = 2
  }

  const randomTop2 = Math.random() 
  const top2Space = document.getElementById('top2-space');

  if (randomTop2 < 0.2) {
    top2Space.innerHTML = "🍅"
    top2Space.classList.add('top2-img');
    pizza.top2.type = "Tomato";
    pizza.top2.cost = 2

  } else if (randomTop2 > 0.2 && randomTop2 < 0.4) {
    top2Space.innerHTML = "🍄"
    top2Space.classList.add('top2-img');
    pizza.top2.type = "Mushroom";
    pizza.top2.cost = 2

  } else if (randomTop2 > 0.4 && randomTop2 < 0.6) {
    top2Space.innerHTML = "🧅"
    top2Space.classList.add('top2-img');
    pizza.top2.type = "Onion";
    pizza.top2.cost = 2

  } else if (randomTop2 > 0.6 && randomTop2 < 0.8) {
    top2Space.innerHTML = "🫑"
    top2Space.classList.add('top2-img');
    pizza.top2.type = "Pepper";
    pizza.top2.cost = 2

  } else {
    top2Space.innerHTML = "🌽"
    top2Space.classList.add('top2-img');
    pizza.top2.type = "Sweetcorn";
    pizza.top2.cost = 2
  }
  const randomTop3 = Math.random() 
  const top3Space = document.getElementById('top3-space');

  if (randomTop3 < 0.2 && allergy.value !== "Nut") {
    top3Space.innerHTML = "🍕"
    top3Space.classList.add('top3-img');
    pizza.top3.type = "Pepperoni";
    pizza.top3.cost = 2

  } else if (randomTop3 > 0.2 && randomTop3 < 0.4) {
    top3Space.innerHTML = "🍗"
    top3Space.classList.add('top3-img');
    pizza.top3.type = "Chicken";
    pizza.top3.cost = 2

  } else if (randomTop3 > 0.4 && randomTop3 < 0.6 && allergy.value !== "Nuts") {
    top3Space.innerHTML = "🍖"
    top3Space.classList.add('top3-img');
    pizza.top3.type = "Pulled Pork";
    pizza.top3.cost = 3

  } else if (randomTop3 > 0.6 && randomTop3 < 0.8 && allergy.value !== "Shellfish") {
    top3Space.innerHTML = "🐟"
    top3Space.classList.add('top3-img');
    pizza.top3.type = "Tuna";
    pizza.top3.cost = 2
    
  } else {
    top3Space.innerHTML = "🥩"
    top3Space.classList.add('top3-img');
    pizza.top3.type = "Spicy Beef";
    pizza.top3.cost = 3
  }
  const randomTop4 = Math.random() 
  const top4Space = document.getElementById('top4-space');

  if (randomTop4 < 0.2 ) {
    top4Space.innerHTML = "🍆"
    top4Space.classList.add('top4-img');
    pizza.top4.type = "Aubergine";
    pizza.top4.cost = 2
    
  } else if (randomTop4 > 0.2 && randomTop4 < 0.4) {
    top4Space.innerHTML = "🍍"
    top4Space.classList.add('top4-img');
    pizza.top4.type = "Pineapple";
    pizza.top4.cost = 2

  } else if (randomTop4 > 0.4 && randomTop4 < 0.6) {
    top4Space.innerHTML = "🌶️"
    top4Space.classList.add('top4-img');
    pizza.top4.type = "Jalapenos";
    pizza.top4.cost = 2

  } else if (randomTop4 > 0.6 && randomTop4 < 0.8) {
    top4Space.innerHTML = "🫒"
    top4Space.classList.add('top4-img');
    pizza.top4.type = "Olives";
    pizza.top4.cost = 3
  
  } else {
    top4Space.innerHTML = "🍳"
    top4Space.classList.add('top3-img');
    pizza.top4.type = "Egg";
    pizza.top4.cost = 2
  }
  getTotal();
};

// adds food dropdowns
function addFood() {
const foodArray = document.getElementsByClassName("food");
// loops through elements with food class name, then adds new class to make dropdowns visible using css
  for (let i = 0; i < foodArray.length; i++) {
    foodArray[i].classList.remove("hide-me");
    foodArray[i].classList.add("show-me");
  }
}

const resetButton = document.getElementById('reset-order');

// adds reset button
function addResetBTN() {
  resetButton.classList.remove('hide-me')
  resetButton.classList.add('reset-btn')
}

const orderButton = document.getElementById('submit-order');

// adds order button
function addOrderBTN() {
  orderButton.classList.remove('hide-me')
  orderButton.classList.add('order-btn')
  orderButton.disabled = true;
}

const baseChoice = document.getElementById('base');
const base = document.getElementById("pizza-img");

baseChoice.addEventListener("change", function () {
  
  if (baseChoice.value === "--Select your base--") {
    base.style.backgroundColor = "none";
    base.classList.add('base-style');

  } else if (baseChoice.value === "Tomato") {
    base.style.backgroundColor = "#c44900";
    base.classList.add('base-style');
    baseChoice.disabled = true;
    pizza.base.type = "Tomato"
    pizza.base.cost = 1;

  } else if (baseChoice.value === "White Sauce") {
    base.style.backgroundColor = "rgb(252, 241, 186)";
    base.classList.add('base-style');
    baseChoice.disabled = true;
    pizza.base.type = "White Sauce"
    pizza.base.cost = 1;

  } else if (baseChoice.value === "BBQ Sauce") {
    base.style.backgroundColor = "rgb(139, 43, 12)";
    base.classList.add('base-style');
    baseChoice.disabled = true;
    pizza.base.type = "BBQ Sauce"
    pizza.base.cost = 1;
 
  } else if (baseChoice.value === "CFG Special") {
    base.style.backgroundColor = "#5c7751";
    base.classList.add('base-style')
    baseChoice.disabled = true;
    pizza.base.type = "CFG Special";
    pizza.base.cost = 2;
  }
  getTotal();
});


const top1Choice = document.getElementById("top1");

top1Choice.addEventListener("change", function () {
  
  if (top1Choice.value === "--Select topping 1--") {
  const none = document.getElementById('top1-space');
  none.innerHTML = ""
  none.classList.add('top1-img');

  } else if (top1Choice.value === "Mozzerella") {
    const mozz = document.getElementById('top1-space');
    mozz.innerHTML = "🧀"
    mozz.classList.add('top1-img');
    top1Choice.disabled = true;
    pizza.top1.type = "Mozzerella"
    pizza.top1.cost = 2

  } else if (top1Choice.value === "Gouda") {
    const gou = document.getElementById('top1-space');
    gou.innerHTML = "🧀"
    gou.classList.add('top1-img');
    top1Choice.disabled = true;
    pizza.top1.type = "Gouda"
    pizza.top1.cost = 2

  } else if (top1Choice.value === "Cheddar") {
    const ched = document.getElementById('top1-space');
    ched.innerHTML = "🧀"
    ched.classList.add('top1-img');
    top1Choice.disabled = true;
    pizza.top1.type = "Cheddar"
    pizza.top1.cost = 2
  
  } else if (top1Choice.value === "Lacto Free") {
    const lacto = document.getElementById('top1-space');
    lacto.innerHTML = "🧀"
    lacto.classList.add('top1-img');
    top1Choice.disabled = true;
    pizza.top1.type = "Lacto Free"
    pizza.top1.cost = 2

  } else if (top1Choice.value === "None") {
    const none = document.getElementById('top1-space');
    none.innerHTML = ""
    none.classList.add('top1-img');
    top1Choice.disabled = true;
    pizza.top1.type = "None"
    pizza.top1.cost = 0
  }
  getTotal();
  });


const top2Choice = document.getElementById("top2");

top2Choice.addEventListener("change", function () {
  
  if (top2Choice.value === "--Select topping 2--") {
    const tom = document.getElementById('top2-space');
    tom.innerHTML = ""
    tom.classList.add('top2-img');

  } else if (top2Choice.value === "Tomatoes") {
    const tom = document.getElementById('top2-space');
    tom.innerHTML = "🍅"
    tom.classList.add('top2-img');
    top2Choice.disabled = true;
    pizza.top2.type = "Tomato";
    pizza.top2.cost = 2

  } else if (top2Choice.value === "Mushrooms") {
    const mush = document.getElementById('top2-space');
    mush.innerHTML = "🍄"
    mush.classList.add('top2-img');
    top2Choice.disabled = true;
    pizza.top2.type = 0;
    pizza.top2.cost = 2
    
  } else if (top2Choice.value === "Onion") {
    const onion = document.getElementById('top2-space');
    onion.innerHTML = "🧅"
    onion.classList.add('top2-img');
    top2Choice.disabled = true;
    pizza.top2.type = "Onion";
    pizza.top2.cost = 2

  } else if (top2Choice.value === "Peppers") {
    const peppers = document.getElementById('top2-space');
    peppers.innerHTML = "🫑"
    peppers.classList.add('top2-img');
    top2Choice.disabled = true;
    pizza.top2.type = "Peppers";
    pizza.top2.cost = 2

  } else if (top2Choice.value === "Sweetcorn") {
    const corn = document.getElementById('top2-space');
    corn.innerHTML = "🌽"
    corn.classList.add('top2-img');
    top2Choice.disabled = true;
    pizza.top2.type = "Corn";
    pizza.top2.cost = 2

  } else if (top2Choice.value === "None") {
    const none = document.getElementById('top2-space');
    none.innerHTML = ""
    none.classList.add('top2-img');
    top2Choice.disabled = true;
    pizza.top2.type = "None";
    pizza.top2.cost = 0
  }
  getTotal();
});


const top3Choice = document.getElementById("top3");

top3Choice.addEventListener("change", function () {
  
  if (top3Choice.value === "--Select topping 3--") {
    const pep = document.getElementById('top3-space');
    pep.innerHTML = ""
    pep.classList.add('top3-img');

  } else if (top3Choice.value === "Pepperoni") {
    const pep = document.getElementById('top3-space');
    pep.innerHTML = "🍕"
    pep.classList.add('top3-img');
    top3Choice.disabled = true;
    pizza.top3.type = "Pepperoni";
    pizza.top3.cost = 2

  } else if (top3Choice.value === "Chicken") {
    const chick = document.getElementById('top3-space');
    chick.innerHTML = "🍗"
    chick.classList.add('top3-img');
    top3Choice.disabled = true;
    pizza.top3.type = "Chicken";
    pizza.top3.cost = 2

  } else if (top3Choice.value === "Pulled Pork") {
    const pork = document.getElementById('top3-space');
    pork.innerHTML = "🍖"
    pork.classList.add('top3-img');
    top3Choice.disabled = true;
    pizza.top3.type = "Pulled Pork";
    pizza.top3.cost = 3

  } else if (top3Choice.value === "Spicy Beef") {
    const beef = document.getElementById('top3-space');
    beef.innerHTML = "🥩"
    beef.classList.add('top3-img');
    top3Choice.disabled = true;
    pizza.top3.type = "Spicy Beef";
    pizza.top3.cost = 3

  } else if (top3Choice.value === "Tuna") {
    const tuna = document.getElementById('top3-space');
    tuna.innerHTML = "🐟"
    tuna.classList.add('top3-img');
    top3Choice.disabled = true;
    pizza.top3.type = "Tuna";
    pizza.top3.cost = 2

  } else if (top3Choice.value === "None") {
    const none = document.getElementById('top3-space');
    none.innerHTML = ""
    none.classList.add('top3-img');
    top3Choice.disabled = true;
    pizza.top3.type = "None";
    pizza.top3.cost = 0
  }
  getTotal();
});


const top4Choice = document.getElementById("top4");

top4Choice.addEventListener("change", function () {
  if (top4Choice.value === "--Select topping 4--") {
    const aub = document.getElementById('top4-space');
    aub.innerHTML = "--Select topping 4--"
    aub.classList.add('top4-img');

  } else if (top4Choice.value === "Aubergine") {
    const aub = document.getElementById('top4-space');
    aub.innerHTML = "🍆"
    aub.classList.add('top4-img');
    top4Choice.disabled = true;
    resetButton.disabled = false;
    orderButton.disabled = false;
    pizza.top4.type = "Aubergine";
    pizza.top4.cost = 2

  } else if (top4Choice.value === "Pineapple") {
    const pine = document.getElementById('top4-space');
    pine.innerHTML = "🍍"
    pine.classList.add('top4-img');
    top4Choice.disabled = true;
    resetButton.disabled = false;
    orderButton.disabled = false;
    pizza.top4.type = "Pineapple";
    pizza.top4.cost = 2

  } else if (top4Choice.value === "Jalapenos") {
    const jal = document.getElementById('top4-space');
    jal.innerHTML = "🌶️"
    jal.classList.add('top4-img');
    top4Choice.disabled = true;
    resetButton.disabled = false;
    orderButton.disabled = false;
    pizza.top4.type = "Jalapenos";
    pizza.top4.cost = 2
    
  } else if (top4Choice.value === "Olives") {
    const ol = document.getElementById('top4-space');
    ol.innerHTML = "🫒"
    ol.classList.add('top4-img');
    resetButton.disabled = false;
    orderButton.disabled = false;
    pizza.top4.type = "Olives";
    pizza.top4.cost = 3

  } else if (top4Choice.value === "Egg") {
    const egg = document.getElementById('top4-space');
    egg.innerHTML = "🍳"
    egg.classList.add('top4-img');
    top4Choice.disabled = true;
    resetButton.disabled = false;
    orderButton.disabled = false;
    pizza.top4.type = "Egg";
    pizza.top4.cost = 2
    
  } else if (top4Choice.value === "None") {
    const none = document.getElementById('top4-space');
    none.innerHTML = ""
    none.classList.add('top4-img');
    top4Choice.disabled = true;
    resetButton.disabled = false;
    orderButton.disabled = false;
    pizza.top4.type = "None";
    pizza.top4.cost = 0
  }
  getTotal();
});

function getTotal() {
  const total = (pizza.base.cost + pizza.top1.cost + pizza.top2.cost + pizza.top3.cost + pizza.top4.cost)
  document.getElementById('total').innerHTML = `total: £${total}`;
}

const pick = document.getElementById('pick-btn')
pick.addEventListener('click', function() {
  const table = document.getElementById('food-table');
  table.classList.remove('hide-me');
  randomizer();
})

const resetBtn = document.getElementById('reset-order')

resetBtn.addEventListener('click', reset) 

function reset() {
  // reset order inside object
  pizza.base.type = "";
  pizza.top1.type = "";
  pizza.top2.type = "";
  pizza.top3.type = "";
  pizza.top4.type = "";
  pizza.base.cost = 0;
  pizza.top1.cost = 0;
  pizza.top2.cost = 0;
  pizza.top3.cost = 0;
  pizza.top4.cost = 0;
  pizza.total = 0;

  localStorage.removeItem('pizza');
  // enable dropdown selection
  baseChoice.disabled = false;
  top1Choice.disabled = false;
  top2Choice.disabled = false;
  top3Choice.disabled = false;
  top4Choice.disabled = false;
  // reset select dropdowns
  baseChoice.selectedIndex = 0;
  top1Choice.selectedIndex = 0;
  top2Choice.selectedIndex = 0;
  top3Choice.selectedIndex = 0;
  top4Choice.selectedIndex = 0;
  // disable order button
  orderButton.disabled = true;
  // clear total box
  document.getElementById('total').innerHTML = `total: £0`;
  // reset pizza icon
  base.style.background = "none";
  document.getElementById('top1-space').innerHTML = ""
  document.getElementById('top2-space').innerHTML = ""
  document.getElementById('top3-space').innerHTML = ""
  document.getElementById('top4-space').innerHTML = ""
};

const order = document.getElementById('submit-order');
// displays order total on page 
order.addEventListener('click', function (){
   // display order page and remove food dropdowns after 1 second
  setTimeout(orderPage, 1000);
  setTimeout(hide, 1000);
     }   
);

const order2 = document.getElementById('order-2');
// displays order total on page 
order2.addEventListener('click', function (){
  // display order page and remove food dropdowns after 1 second
  setTimeout(orderPage, 1000);
  setTimeout(hide, 1000);
     }   
);

function orderPage() {
  const basket = document.getElementById('order-content')
  basket.classList.remove('order-content')
  basket.classList.add('show-order')

  const total = (pizza.base.cost + pizza.top1.cost + pizza.top2.cost + pizza.top3.cost + pizza.top4.cost)
  document.getElementById('total').innerHTML = `total: £${total}`;
  document.getElementById('thanks').innerHTML = `Thanks for your order!`;
  document.getElementById('total1').innerHTML = `${pizza.base.type} Base: £${pizza.base.cost}`;
  document.getElementById('total2').innerHTML = `${pizza.top1.type}: £${pizza.top1.cost}`;
  document.getElementById('total3').innerHTML = `${pizza.top2.type}: £${pizza.top2.cost}`;
  document.getElementById('total4').innerHTML = `${pizza.top3.type}: £${pizza.top3.cost}`;
  document.getElementById('total5').innerHTML = `${pizza.top4.type}: £${pizza.top4.cost}`;
  document.getElementById('total6').innerHTML = `Your total is £${total}`;
}


function hide() {
const foodList = document.getElementsByClassName("food");
  for (let i = 0; i < foodList.length; i++) {
    foodList[i].classList.remove("show-me");
    foodList[i].classList.add("hide-me");
   }
    resetButton.classList.add('hide-me')
    resetButton.classList.remove('reset-btn')
    orderButton.classList.add('hide-me')
    orderButton.classList.remove('order-btn')
  };

  function hideOrder() {
    const basket = document.getElementById('dropdown-content')
    basket.classList.remove('show')
    basket.classList.add('dropdown-content')
  }

 


