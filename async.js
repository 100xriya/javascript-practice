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

// -----------------------------------async------------------------//

//q1 Function of async- returns only promise(fulfilled)
async function greet() {
    return "Hello";
}
console.log(greet());

//q2 to print the value inside function 
async function greet() {
    return "Hello";
}

greet().then(function (value) {
    console.log(value);
});

// q3 also returns promise
async function add(a, b) {
    return a + b;
}
console.log(add(2, 3));
add(2, 3).then(function (value) {
    console.log(value);

})

// q4 order of execution of .then() 
async function greet() {

    return "Hello";
}

console.log("A");

const p = greet();

console.log("B");

// .then() sends callback to microtask queue to run after call stack is empty -> after js 
p.then(function (value) {
    console.log(value);
});

console.log("C");
// output : A B C Hello 


// ---------------------------await----------------------------//
// w/o await
async function greet() {
    return "Hello";
}

greet().then(function (value) {
    console.log(value);
});

console.log("End");

// with await
async function main() {

    const value = await greet();

    console.log(value);

}

main();

console.log("End");

//q1 await ...execution order 
async function greet() {
    console.log("A");
    return "Hello";
}

async function main() {
    console.log("B");

    const value = await greet();

    console.log(value);

    console.log("C");
}
// runs first
console.log("Start");

// print B , pauses main() at promise prints A
main();

console.log("End");
// callstack empty main() continue
// Start B A End Hello C

// q2
async function greet() {
    console.log("1");
    return "Hello";
}

async function main() {
    console.log("2");

    const x = await greet();

    console.log(x);
}

main();

console.log("3");
// 2 1 3 Hello

// q3
function getNumber() {
    return 10;
}

async function main() {
    const x = await getNumber();

    console.log(x);
    console.log("Done");
}

main();

console.log("Outside");
// Outside 10 Done

// q4 what await does when there isn't even a Promise involved.
async function main() {
    console.log("A");
    // 10 treated as an already-fulfilled value
    const x = await 10;

    console.log(x);
}

main();

console.log("B");
// A B 10


// q5 why await is normally used inside an async function.
function main() {
    console.log("A");
    // normal functions cant show async behaviour and cant be paused and resumed later
    const x = await 10;

    console.log(x);
}

main();

console.log("B");
// throws error

// q6
async function greet() {
    return "Hello";
}

async function main() {
    console.log("A");

    const value = await greet();

    console.log(value);
    console.log("B");
}

main();

console.log("C");

// q6b write .then() version
async function greet() {
    return "Hello";
}
async function main() {
    console.log("A");

    greet().then(function (value) {
        console.log(value);
        console.log("B");

    })
}
main();

console.log("C");

// execution order
async function greet() {
    console.log("Greet");
    return "Hello";
}

async function main() {
    console.log("A");

    const value = await greet();

    console.log(value);
    console.log("B");
}

main();

console.log("C");
// A Greet C Hello B

// setTimeout and async fn together
function wait() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Done");
        }, 5000);
    });
}

async function main() {
    console.log("A");

    const value = await wait();

    console.log(value);
    console.log("B");
}

main();

console.log("C");
// A C Done B


// await + Promises + timers + task queue + microtask queue + Event Loop
function wait() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Done");
        }, 0);
    });
}

async function main() {
    console.log("A");

    const value = await wait();

    console.log(value);
    console.log("B");
}

main();

Promise.resolve().then(function () {
    console.log("Microtask");
});

console.log("C");
//output - A C Microtask Done B
// 1. call stack ->2. Promise.resolve()→ .then callback → Microtask Queue -> 3. setTimeout → Timer callback → resolve() → Promise fulfilled → await continuation → Microtask Queue

// How many times main() pauses.
async function main() {
    console.log("A");

    const x = await Promise.resolve("X");

    console.log(x);

    const y = await Promise.resolve("Y");

    console.log(y);

    console.log("B");
}

main();

console.log("C");
// it pauses twice but resumes in next microtask again but there is nothing in sync js so resumes instantaneously

// q1 how an async function can return a value, and how another async function can await that value.
async function greet() {
    return "Hello";
}
// await takes the fulfilled value out of the Promise for the async function's continuation.
async function main() {
    const result = await greet();

    console.log(result);
}

main();
// prints Hello istead of Promise { fulfilled: "Hello" } -> bcz await takes value out of fulfilled promise

// q2 to extract the value of an async fn using await-> this returns the value
async function add(a, b) {
    return a + b;
}

async function main() {
    const result = await add(5, 3);

    console.log(result);
}

main();
// 8

// q3 this returns promise
async function add(a, b) {
    return a + b;
}

async function main() {
    const result = await add(5, 3);

    return result * 2;
}

const answer = main();

console.log(answer);
//  promise:fulfilled(16)

// q4
async function double(n) {
    return n * 2;
}

async function quadruple(n) {
    const result = await double(n);
    return result * 2;
}

async function main() {
    const result = await quadruple(5);
    console.log(result);
}

main();
// 20 

// -------------what happens when the Promise rejects?--------------------
async function getData() {
    return Promise.reject("Something went wrong");
}

async function main() {
    const result = await getData();

    console.log(result);
    console.log("Done");
}

main();
// The await causes an error to be thrown inside main(), so the next console.logs don't run.

// q2
async function getData() {
    return Promise.reject("Error");
}

async function main() {
    console.log("A");

    await getData();

    console.log("B");
}

main();

console.log("C");
// A C
// A -> await getData()-> main pauses-> C-> microtask resumes main-> Promise is rejected-> await throws "Error"-> main's Promise becomes rejected-> unhandled rejection

// ------------------ handling errors using try and catch-------------------//
// q1
async function getData() {
    return Promise.reject("Error");
}

async function main() {
    console.log("A");
    // exit here continue with sync js
    try {
        const result = await getData();
        console.log(result);
    } catch (error) {
        // When the rejected await resumes and throws, handle that thrown error here. ->catch
        console.log(error);
    }

    console.log("B");
}

main();

console.log("C");
// A C Error B

// q2 Does catch run w/o error? NO.
async function getData() {
    return "Success";
}

async function main() {
    try {
        const result = await getData();
        console.log(result);
    } catch (error) {
        console.log("Error");
    }
}

main();
// Prints Success as there is no error to catch

// q3 throw also throws error
async function getData() {
    // throw also throws an error and work similar to promise.reject("Oops")
    throw "Oops";
}

async function main() {
    try {
        const result = await getData();
        console.log(result);
    } catch (error) {
        console.log(error);
    }

    console.log("Done");
}

main();
// oops done

// -------------------------sequential vs parallel async operations.------------------------//
// q1 seq & parallel
async function getUser() {
    // imagine this takes 2 seconds
    return "User";
}

async function getPosts() {
    // imagine this takes 2 seconds
    return "Posts";
}
// sequential exec.======>
async function main() {
    // await doesn't start the asynchronous operation. Calling the function starts it. -> await determines when your async function pauses to wait for the result.
    const user = await getUser();
    const posts = await getPosts();

    console.log(user);
    console.log(posts);
}
main();

// q1b parallel exec.==========>
async function main() {
    const userPromise = getUser();
    const postsPromise = getPosts();

    const user = await userPromise;
    const posts = await postsPromise;

    console.log(user);
    console.log(posts);
}
main();

// ------------------------Promise.all()----------------------------------//
// q1 both fn run together
async function getUser() {
    // imagine this takes 2 seconds
    return "User";
}

async function getPosts() {
    // imagine this takes 2 seconds
    return "Posts";
}
async function main() {
    const [user, posts] = await Promise.all([
        // Promise.all() itself returns one Promise containing both values 
        // Promise → fulfilled with ["User", "Posts"]
        getUser(),
        getPosts()
    ]);

    console.log(user);
    console.log(posts);
}


// -------------------------Promise.all() rejection handling--------------------//
// q1
async function task1() {
    return "A";
}

async function task2() {
    throw "Oops";
}

async function main() {
    try {
        const results = await Promise.all([
            task1(),
            task2()
        ]);

        console.log(results);
    } catch (error) {
        console.log(error);
    }

    console.log("Done");
}

main();
// Oops Done
// task1() fulfills with "A", but that value is only going into Promise.all() internally. You never console.log("A")
