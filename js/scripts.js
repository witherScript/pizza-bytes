/*                          --- Business Logic ---

*/

//stores the pricing information for the upper and lower topping categories
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.upper = ["pepperoni", "anchovies", "pineapple", "spinach", "parmesean"];
  this.lower = ["cheddar cheese", "feta cheese", "italian sausage", "jalapenos", "bacon"];
}

Pizza.prototype.getPrice = function () {
  const price = 0.00;
  this.toppings.array.forEach(topping => {
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

}

//UI Logic


