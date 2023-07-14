/*                          --- Business Logic ---

*/

//stores the pricing information for the upper and lower topping categories
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.upper = ["pepperoni", "anchovies", "pineapple", "spinach", "parmesean"];
  this.lower = ["cheddar cheese", "feta cheese", "italian sausage", "jalapenos", "bacon"];
  console.log(toppings);
}

Pizza.prototype.getPrice = function () {
  let price = 0.00;
  this.toppings.forEach(topping => {
    if (this.upper.includes(topping)) {
      price += 1.75;
    }
    else if (this.lower.includes(topping)) {
      price += .5;
    }
  });

  if (this.size === "small") {
    price += 5.75;
  }
  else if (this.size === "medium") {
    price += 6.75;
  }
  else if (this.size === "large") {
    price += 8.25;
  }

  this.price = (price).toFixed(2);

}

//UI Logic
function displayPizza(pizza) {
  const order_details = document.querySelector('ul#order');
  const toppings = pizza.toppings;
  console.log(toppings);
  toppings.forEach(function (topping) {
    console.log(topping);
    const li = document.createElement('li');
    li.textContent = topping.charAt(0).toUpperCase() + topping.slice(1);
    order_details.append(li);
  });
  document.querySelector('div#order-form').classList.add('hidden');
  document.querySelector('span#total').innerText = pizza.price;
}


function handleFormSubmit(event) {
  event.preventDefault();
  const toppings = [...document.querySelectorAll('input[name=topping]:checked')].map(e => e.value);
  const sizeElem = document.getElementById("size").selectedIndex;
  const size = document.getElementsByTagName("option")[sizeElem].value;
  const myPizza = new Pizza(toppings, size);
  myPizza.getPrice();
  document.querySelector('div#receipt').classList.remove('hidden');
  displayPizza(myPizza);

}

window.addEventListener('load', function () {
  const form = document.getElementById('order');
  form.addEventListener('submit', handleFormSubmit);

});
