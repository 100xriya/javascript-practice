// Exercise 1 — Basic setTimeout()
console.log("A");

setTimeout(function () {
    console.log("B");
}, 0);

console.log("C");


//2 event loop questions
console.log("1");
setTimeout(function () {
    console.log("2");
}, 0);
setTimeout(function () {
    console.log("3");
}, 0);
console.log("4");

// 3 Different Delay Times
console.log("Start");

setTimeout(function () {
    console.log("A");
}, 1000);

setTimeout(function () {
    console.log("B");
}, 500);

console.log("End");

// Nested setTimeout()

console.log("Start");

setTimeout(function () {
    console.log("A");

    setTimeout(function () {
        console.log("B");
    }, 0);

}, 0);

console.log("End");


// Nested asynchronous tasks
console.log("1");

setTimeout(function () {
    console.log("2");

    setTimeout(function () {
        console.log("3");
    }, 0);

}, 0);

console.log("4");

setTimeout(function () {
    console.log("5");
}, 0);

// PROMISE 
console.log("Start");

const promise = new Promise(function () {
    console.log("Inside Promise");
});

console.log("End");

// q2
console.log("Start");

const promise = new Promise(function (resolve) {
    console.log("A");
    resolve("Pizza");
    console.log("B");
});

promise.then(function (value) {
    console.log(value);
});

console.log("End");

// q3
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");

// q4
const promise = new Promise(function (resolve, reject) {

    resolve("A");

    reject("B");

});

// q5
const pizzaPromise = new Promise(function (resolve) {

    resolve("🍕 Pizza");

});

pizzaPromise.then(function (value) {

    console.log(value);

});

// q6 Promise Execution Order
console.log("1");

const promise = new Promise(function (resolve) {
    console.log("2");
    resolve("Hello");
    console.log("3");
});

promise.then(function (value) {
    console.log(value);
});

console.log("4");

// PROMISE CHAINING............
// Q1
const promise = Promise.resolve(5);

const newPromise = promise.then(function (value) {
    return value * 2;
});
console.log(promise);
console.log(newPromise);


// q2 event loop 
console.log("Start");

Promise.resolve().then(() => console.log("Promise"));

setTimeout(() => console.log("Timer"), 0);

console.log("End");
