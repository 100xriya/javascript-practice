// //q1
const heading = document.querySelector("#heading");

// //q2
// console.log(heading.textContent);

// //q3
// const helloPara = document.querySelector(".message");

// //q4
// const status = document.querySelector("#status");
// status.textContent = "Online";
// console.log(status.textContent);

// //q5
// const btn = document.querySelector("#btn");
// btn.textContent = "Sending...";

// //q6 DOM

// //q7
// const title = document.querySelector("#title");
// title.style.color = "red";
// //q8
// title.style.backgroundColor = "Yellow";

// //q9 final color= green, bcz last executed
// //q10
// const btn2 = document.querySelector("#btn2");
// btn2.addEventListener("click", function () {
//     console.log("Button is Clicked!");

// })
// //q11
// const button = document.querySelector("#btn");
// button.textContent = "Hello";

//q12 function is declared after the event listener, so it doesnt knw what action to perfom when event happens

//q Button Text Changer
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function () {
    btn2.textContent = "Thanks!";
    heading.style.backgroundColor = "Yellow";
    heading.style.color = "Black";

});

//counter
let count = 0;
let CountPara = document.querySelector("#count")
const btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
    count = count++;
    CountPara.textContent = count;
});

