
// 1. ways to print in JavaScript
// console.log("Hello world")
// //alert("me")
// document.write("this is document write")

// 2. Javascript console API
// console.log("hello world", 4 + 6, "Another log");
// console.warn("this is warning")
// console.error("this error")

// 3. JavaScript variables
// what ar variable -containers to store data value 
/*
Multiline 
Comment
*/
var number1 = 61;
var number2 = 57;
// console.log(number1 + number2);


// 4. Data Types in JavaScript 
// Numbers

var num1 = 455;
var num2 = 67.69;

//string

var str1 = "This is a string";
var str2 = 'This is also a string';

// objects

var marks = {

    ravi: 54,
    shubham: 77,
    rana: 99.977
}

// console.log(marks);

// Booleans
var a = true;
var b = false;
// console.log(a, b);

//var und = undefined;

// console.log(undefined);
// console.log(und);

var n = null;
// console.log(n);

// At a very high level, there are two types of data types
// in JavaScript

// // 1 . Primiitive data types: 
// undefined, null number , string ,Boolean, symbol
// 2 . Refrence data types:
// Arrays and objects

// var arr = [1,2,3,"bablu",4,5]
// console.log(arr)


// operators i Java Script
// Arithmetic Operators

var a = 100;

var b = 10;
console.log("The value of a + b is ", a + b);
console.log("The value of a - b is ", a - b);
console.log("The value of a * b is ", a * b);
console.log("The value of a / b is ", a / b);


// Assignment Operators 

var c = b;

// c += 2;
// c -= 2;
// c *= 2;
// c /= 2;
// console.log(c);


// Comparision Operatord
var x = 34;
var y = 56;

// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);


// Logical Opeerators
// logical and
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

// logical or

// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// logical not
// console.log(|false)
// console.log(|true)


// function in Java Script
function avg(a, b) {
    return (a + b) / 2;
}

// DRY = Do no repeat yourself
c1 = avg(4, 6);
c2 = avg(14, 16);
console.log(c1, c2);

// // Conditional in JavaScript

// var age = 11;
// // Single if statement
// if (age > 18){
//     console.log('You can drink rasna water');

// }
// else{
//     console.log('You cannot drink rasna water');
// }


// age = 25;
// // if-else Ladder
// if(age > 32){
//     console.log('You are not a kid');

// }
// else if(age >26){
//     console.log("bachhe nahi rahe");
// }
// else if(age >22){
//     console.log("Yes Bachhe nahi rahe");
// }
// else if(age >18){
//     console.log("18 bachhe nhi rahe");
// }
// else{
//     console.log("Bachhe rahe");
// }
// console.log("End of ladder");



var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
for(var i=0;i<arr.length;i++){
    if(i==2){
        // break;
        continue;
    }
    // console.log(arr[i])
}

// arr.forEach(function(element){
//     console.log(element);
// })


// const ac = 0;
// ac++
// ac = ac +1;
// Let j = 0;`
// while(j<arr.length){
//     console.log(arr[j]);
//     j ++;
// }

// do{
//     console.log(arr[j])
//     j++;
// } while (j <arr.length);

let myArr = ["Fan", "Camera", 34, null, true];

// Array Methods
// console.log(myArr.length);
// myArr.pop();
// myArr.push("harry")
//myArr.shift()
//console.log(myArr.unshift("Harry"))
// const newLen = myArr.unshift("Harry");
// console.log(newLen);
// console.log(myArr);

// String Methods in JavaScript
let mylovelystring = "ravi is a good boy";
// console.log(mylovelystring.length)
// console.log(mylovelystring.indexOf("good"))

//console.log(mylovelystring.slice(0,3))
d = mylovelystring.replace("ravi", "harry");
// console.log(d, mylovelystring)

myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate).getDay();


// DOM Manipulation

// let elem =document.getElementById('click');
// console.log(elem);

// //javascript event ---------



// // Arrow finctions
// // function summ(a, b){
// //     return a+b;
// // }

// summ = (a,b)=>{
//     return a+b;
// }


// logkro = ()=>{
//     document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval
//     fired</b>"
//     console.log("I am your log");
// }
// // SetTimeout and setinterval
// setTimeout(loKaro, 2000);


// Javascript localStorage
// localStorage.setItem('name', 'ravi')
// localStorage
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear();

//Json

// obj = {name: "ravi", length:1, a: {this: "that"}}
// jso = JSON.stringify(obj);
// console.log(typeof jso)
// console.log(jso)



// Tempalte literals - Backticks

a = 34;
console.log('this is my ${a}')








