// CHALLENGE 1: API + LocalStorage Cache

/* You have this API:
https://dummyjson.com/products/1

Build a small script that does the following:

1. Check localStorage for a saved product.
2. If nothing is saved:
   - Fetch the product from the API.
   - Convert the response to JSON.
   - Save the product in localStorage.
   - Log the product.
3. If the product is already saved:
   - Don't make the API request.
   - Get the product from localStorage.
   - Convert it back into a JavaScript object.
   - Log the product.
4. Add a way to reset/remove the saved product from localStorage
   so the "first time" behavior can be tested again.

Concepts being practiced:
fetch, async/await, response.json(), JSON.stringify(),
JSON.parse(), localStorage, if/else, strict equality */

// SOLUTION
if (localStorage.getItem("myKey") === null) {
   const response = await fetch("https://dummyjson.com/products/1");
   const data = await response.json();

   localStorage.setItem("myKey", JSON.stringify(data));

   console.log(localStorage.getItem("myKey"));
} else {
   console.log(JSON.parse(localStorage.getItem("myKey")));
}

let choice = prompt("Do you want to reset the value?");

if (choice === "yes") {
   localStorage.removeItem("myKey");
}

// CHALLENGE 2: Shopping Cart Quantity Updater :arrays + objects + functions + DOM/events.

/* You are given this cart:

const cart = [
    { id: 1, name: "T-shirt", price: 20, quantity: 2 },
    { id: 2, name: "Jeans", price: 50, quantity: 1 },
    { id: 3, name: "Cap", price: 15, quantity: 3 }
];

Your page has a button for each product:

<button data-id="1">+</button>
<button data-id="2">+</button>
<button data-id="3">+</button>

Build the JavaScript logic so that:

1. Clicking "+" increases that product's quantity by 1.

2. The correct product should be updated based on the button
   that was clicked.

3. After every click, calculate and display the total cart price.

   Example:
   T-shirt: 20 × 2 = 40
   Jeans:   50 × 1 = 50
   Cap:     15 × 3 = 45

   Total = 135

4. Don't create separate variables for each product.
   The cart array should remain your source of truth.

5. Create at least one function to handle the cart logic.

6. You may use event delegation if you think it makes sense,
   but decide the architecture yourself. */