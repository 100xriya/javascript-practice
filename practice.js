// // /*Pattern:
// // Variable(s):
// // When does the variable change? */

// // //q1 (sum off even no)
let nums = [3, 8, 10, 5, 7, 2];
let sum = 0;
for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
        sum = sum + nums[i];
    }
}
console.log(sum);

// // //q2 (count +ve no)
let nums2 = [-2, 5, 7, -1, 4, -8];
let count = 0;
for (let j = nums2[0]; j < nums2.length; j++) {
    if (nums2[j] > 0) {
        count++
    }
}
console.log(count);

// // //q3 (find max)
let nums3 = [12, 4, 55, 23, 9];
let max = nums3[0]
for (a = 0; a < nums3.length; a++) {
    if (nums3[a] > max) {
        max = nums3[a];
    }
}
console.log(max);

// // //q4 (find min)
let min = nums3[0]
for (p = 0; p < nums3.length; p++) {
    if (nums3[p] < min) {
        min = nums3[p];
    }
}
console.log(min);

// q5 (find avg)
let nums5 = [10, 20, 30, 40];
let sum = 0;
let avg = 0;
for (let m = 0; m < nums5.length; m++) {
    sum += nums5[m];
}
avg = sum / nums5.length;
console.log(avg);

// // //q6 (i accidentally did the sum but check them anyway)
let nums6 = [1, 2, 3, 4, 5, 6, 7];
let sumEven = 0;
let sumOdd = 0;
for (let i = 0; i < nums6.length; i++) {
    if (nums6[i] % 2 === 0) {
        sumEven = sumEven + nums6[i];
    } else {
        sumOdd += nums6[i];
    }
}
console.log(`The sum of even no is ${sumEven}`);
console.log(`The sum of odd no is ${sumOdd}`);

// q6 (count)
let countEven = 0;
let countOdd = 0;
for (let c = 0; c < nums6.length; c++) {
    if (nums6[c] % 2 === 0) {
        countEven++;
    } else {
        countOdd++;
    }
}
console.log(`The count of even no is ${countEven}`);
console.log(`The count of odd no is ${countOdd}`);

// // //q7 second largest
let nums7 = [10, 25, 7, 45, 30];
let max1 = nums7[0];
let max2 = nums7[0];
for (let m = 0; m < nums7.length; m++) {
    if (nums7[m] > max1) {
        max1 = nums7[m];
    }
    if (nums7[m] > max2 && nums7[m] < max1) {
        max2 = nums7[m];
    }
}
console.log(`Second max no is ${max2}`);



// correct ans
let nums7 = [10, 25, 7, 45, 30];

let max1 = nums7[0];
let max2 = nums7[0];

for (let i = 0; i < nums7.length; i++) {

    if (nums7[i] > max1) {
        max2 = max1;
        max1 = nums7[i];
    }

    else if (nums7[i] > max2) {
        max2 = nums7[i];
    }

}
console.log(max2);

q8
let nums = [8, 15, 3, 22, 10, 1];
let max = nums[0], min = nums[0], sum = 0, countEven = 0;
for (i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
        max = nums[i];
    }
    if (nums[i] < min) {
        min = nums[i];
    }
    sum += nums[i]
    if (nums[i] % 2 === 0) {
        countEven++;

    }

}
console.log(`largest no is: ${max}`);
console.log(`smallest no is: ${min}`);
console.log(`sum of no is: ${sum}`);
console.log(`even no are ${countEven}`);

// q8 reverse array
let arr = [1, 2, 3, 4, 5];
// for (where to start, stop, where move)
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);

}

//q9
let nums = [5, 10, 11, 15, 17, 20];
let count = 0;
for (let c = 0; c < nums.length; c++) {
    if (nums[c] % 5 === 0) {
        count++
    }
}
console.log(count);

//q10
let arr1 = [2, 4, 7, 9, 11, 15];
let countPrime = 0;
for (let p = 0; p < arr1.length; p++) {
    if (arr1[p] % arr1[p] === 1 && arr1[p] % 1 === arr1[p]) {
        countPrime++
    }
}
console.log(countPrime);

//q11 count vowels
let str = "javascript";
let countVow = 0;
for (let v = 0; v < str.length; v++) {
    if (str[v] === "a" || "e" || "i" || "o" || "u") {
        countVow++
    }
}
console.log(countVow);

//q1 Count Negative Numbers
let nums = [5, -2, 8, -9, 10, -1];
let count = 0;
for (let c = 0; c < nums.length; c++) {
    if (nums[c] < 0) {
        count++;
    }
}
console.log(count);

//q2 count of multiple of 3
let nums2 = [3, 5, 9, 10, 12, 14];
let count3 = 0;
for (let m = 0; m < nums2.length; m++) {
    if (nums2[m] % 3 === 0) {
        count3++
    }
}
console.log(count3);

//q2b sum of multiple of 3
// let nums2 = [3, 5, 9, 10, 12, 14];
let sum3 = 0;
for (let m = 0; m < nums2.length; m++) {
    if (nums2[m] % 3 === 0) {
        sum3 += nums2[m]
    }
}
console.log(sum3);


//q3 largest odd no
let nums3 = [2, 15, 8, 21, 18, 7];
let maxOdd = 0;
for (let r = 0; r < nums3.length; r++) {
    if (nums3[r] > maxOdd && nums3[r] % 2 !== 0) {
        maxOdd = nums3[r]
    }
}
console.log(`max odd no: ${maxOdd}`);

//q4 smallest even
let minEven = nums3[0];
for (let e = 0; e < nums3.length; e++) {
    if (nums3[e] < minEven && nums3[e] % 2 === 0) {
        minEven = nums3[e]
    }
}
console.log(`min even no is: ${minEven}`);

//q5
let str = "javascript";
let countA = 0;
for (let a = 0; a < str.length; a++) {
    if (str[a] === "a") {
        countA++
    }
}
console.log(`no of a is ${countA}`);

//q6
let str6 = "programming";
let countVow = 0;
for (let v = 0; v < str6.length; v++) {
    if (str6[v] === "a" ||
        str6[v] === "e" ||
        str6[v] === "i" ||
        str6[v] === "o" ||
        str6[v] === "u"
    ) {
        countVow++
    }
}
console.log(`no of vowels: ${countVow}`);

//q6 find the first vowel
let posO = 0;
for (let o = 0; o < str6.length; o++) {
    if (str6[o] === "a" ||
        str6[o] === "e" ||
        str6[o] === "i" ||
        str6[o] === "o" ||
        str6[o] === "u"

    ) {
        posO = str6[o];
        break;
    }


}
console.log(`first vowel is ${posO}`);


//q7 count uppercase letters
let str7 = "OpenAI";
let countUp = 0;
for (let u = 0; u < str7.length; u++) {
    if (str7[u] >= "A" && str7[u] <= "Z") {
        countUp++;
    }
}
console.log(`uppercase letters are:  ${countUp}`);

//q8 Print each character with its index.
let str8 = "banana";
for (let i = 0; i < str8.length; i++) {
    console.log(i, str8[i]);

}


// CREATE SOFT COPIES -> when change done in main ,it reflects in softcopy
let arr = ["1", "2", "3"];
let softcopyarr = arr;
arr.pop();
console.log(arr);
console.log(softcopyarr);

//CREATE HARD COPY
let arr = ["1", "2", "3"];
let hardcopyarr = [...arr];
arr.pop();
console.log(arr);
console.log(hardcopyarr);

// merge arrays
let arr1 = ["1", "2", "3"];
let arr2 = ["a", "b", "c"];
let mergearr = arr1.concat(arr2);
console.log(typeof arr1, arr1);
console.log(typeof arr2, arr2);
console.log(typeof mergearr, mergearr);


// WHILE LOOP QUESTIONS
//q1 countdown
let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}

//q2  print odd  no
let j = 1;
while (j < 16) {
    console.log(j);
    j += 2;
}

//q3 count vowels
let str6 = "education";
let countVow = 0;
let o = 0;
while (o < str6.length) {
    if (str6[o] === "a" ||
        str6[o] === "e" ||
        str6[o] === "i" ||
        str6[o] === "o" ||
        str6[o] === "u") {
        console.log(o);
        countVow++;
    }
    o++;
}



//Can you rewrite this for loop as a while loop?
for (let i = 0; i < 10; i++) {
    console.log(i);
}

let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

// FUNCTIONS
Q1
function sayHello() {
    return `Hello world`;
}
// let x = sayHello();
console.log(sayHello());

//q2
function greet(name) {
    return `Hello ${name}`;
}
console.log(greet("ajay"));

// introduction
function introduce(name, age) {
    return `My name is ${name} and I am ${age} years old.`
}
console.log(introduce("Zeus", 10000));


//q3 square of number 
function square(num) {
    return num * num;
}
console.log(square(34));

//q4
function add(a, b) {
    return a + b;
}
console.log(add(8, 7));

//q5
function isEven(nums) {
    if (nums % 2 === 0) {
        return `even`;
    } else { return `odd` }
}
console.log(isEven(35453));

// check temp and print the weather
function checkTemperature(temp) {
    if (temp < 20) {
        return `Cold`;
    } else if (temp <= 30) {
        return `Pleasant`;
    } else {
        return `Hot`;
    }
}
console.log(checkTemperature(15))  // Cold
console.log(checkTemperature(25))  // Pleasant
console.log(checkTemperature(30))  // Pleasant
console.log(checkTemperature(35))  // Hot

// return largest
function getLargest(a, b) {
    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else {
        return `Both are equal`;
    }
}
console.log(getLargest(5, 9));
console.log(getLargest(20, 3));
console.log(getLargest(7, 7));

//count even no
function countEven(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++;
        }
    } return count;

}
console.log(`no of even elements in array is : ${countEven([2, 5, 8, 11, 14])}`);

//Returns the first even number. If there are no even numbers, return: -1
function findFirstEven(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            return arr[i];
        }
    }
    return -1;
}

console.log(`the first even no in arr: ${findFirstEven([3, 7, 8, 10])}`);




//q1 SUM OF POSITIVE NO IN ARRAY
function sumPositive(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}
console.log(`Sum of positive numbers in array : ${sumPositive([4, -2, 7, -5, 3])}`);

//q2 COUNT VOWELS IN STRING
function countVowels(str) {
    //declaration of variable inside function
    let count = 0;
    // for loop with if-else condtion inside function
    for (let o = 0; o < str.length; o++) {

        if (str[o] === "a" ||
            str[o] === "e" ||
            str[o] === "i" ||
            str[o] === "o" ||
            str[o] === "u") {
            count++;
        }
    }
    return count;
}
console.log(countVowels("banana"));
console.log(countVowels("alalakkiiiooojdsjdkf"));


//Q3 Largest no. in the array
function findLargest(arr) {
    let max = arr[0];
    for (let m = 0; m < arr.length; m++) {
        if (arr[m] > max) {
            max = arr[m];
        }
    } return max;
}
console.log(`Largest no. in the array: ${findLargest([5, 8, 2, 10, 6])}`);


//q4
function containsNumber(arr, target) {
    for (let t = 0; t < arr.length; t++) {
        if (arr[t] === target) {
            return true;
        }
    }
    return false;
}

console.log(`does this target exist in array? ${containsNumber([2, 4, 6, 8], 6)}`);
console.log(`does this target exist in array? ${containsNumber([2, 4, 6, 8], 5)}`);

//q5
/* function countGreaterThan(arr, num) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            count++;
        }
    } return count;
}
console.log(`${countGreaterThan([5, 2, 9, 7, 1], 4)} no.s in array are greater than the target`); */

//q6
function firstVowel(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" ||
            str[i] === "e" ||
            str[i] === "i" ||
            str[i] === "o" ||
            str[i] === "u") {
            return str[i];
        }
    } return null;
}
console.log(`first vowel in str is: ${firstVowel("strength")}`);
console.log(`first vowel in str is: ${firstVowel("rhythm")}`);

//q7
function findSecondLargest(arr) {
    let max = arr[0];
    let max2 = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        } else if (arr[i] < max && arr[i] > max2) {
            max2 = arr[i]
        }
    } return max2;
}
console.log(`Second largest no is ${findSecondLargest([8, 5, 10, 3, 7])}`);
console.log(`Second largest no is ${findSecondLargest([10, 8, 6])}`);
console.log(`Second largest no is ${findSecondLargest([2, 5, 3])}`);
console.log(`Second largest no is ${findSecondLargest([5, 5, 4])}`);

//q8
function reverseString(str) {
    for (let i = str.length - 1; i >= 0; i--) {
        str[i];
    } return;
}
console.log(`reverse of string is ${reverseString("hello")}`);
