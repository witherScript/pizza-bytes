# Pizza Bytes
## Author: Genesis Scott

Welcome to Pizza Bytes, a simple web application for ordering pizza online. This application allows you to select your favorite pizza toppings and size, and then calculates the total cost of your pizza order.

## Technologies Used
- Javascript
- Bootstrap 5.3.0
- VSCode
- Git

## How it Works
The core functionality of the application is contained within the js/scripts.js file. This file contains a Pizza constructor function that takes in an array of toppings and a size as parameters. The Pizza object has a getPrice method that calculates the price of the pizza based on the selected toppings and size.

The displayPizza function is used to display the details of the pizza order, and the handleFormSubmit function is used to handle the form submission event, create a new Pizza object, calculate the price, and display the order details.

## Set-up Instructions
1. Clone the github repo:
```bash
 git clone https://github.com/witherScript/pizza-bytes
```
2. Navigate to the order form page (pages/order-form.html).
3. Select your desired pizza toppings and size.
4. Submit the form to see the details of your order and the total cost.

## Tests
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

## License
Genesis Scott, Copyright 2023.
This project is licensed under the MIT License.
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
