Descibe: Pizza()
Test: It should instantiate a Pizza object with a list of toppings and a size
Code:
```javascript
const myPizza = new Pizza(["anchovies", "pepperoni"], "medium");
```

Expected Output:
myPizza.toppings should output ["anchovies", "pepperoni"]
myPizza.size should output "medium"


Describe getPrice()
Test: It should return 7.75 for a small pepperoni pizza
Code:
```javascript
  const myPizza = new Pizza(["pepperoni"], "small");
  const price = myPizza.getPrice();
```

Expected Output:
price should be 7.75