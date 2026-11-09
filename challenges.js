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