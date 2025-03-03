// Q1: What is the difference between a function declaration and a function expression? 🤔

// Function declaration: is the most common way to define a function in JavaScript. 🚀

myFunction();  // ✅ Function call before declaration will work 🎉
function myFunction() {   // Can be re-declared 🔄
    console.log("Hello, World! 🌍");
}

function myFunction() {   
    console.log("Hello, Music! 🎵");
}
myFunction(); // 🎶

/* Function expression involves creating a function as part of an expression, 
   often assigned to a variable. 📝 */

// myFunction2(); // ❌ Error: myFunction2 is not a function ⚠️
const myFunction2 = function () {  
    console.log("Hello, Programmer! 💻");
};

myFunction2(); // 👨‍💻

// myFunction2 = function () {  // Can be re-declared only if let or var 🔄
//     console.log("Hello, Boss! 👑");
// }

myFunction2(); // 🤖

// Q2: What are arrow functions? 🏹
// Arrow functions provide a shorter syntax and do not have their own this. ❌👤
// Example: const add = (a, b) => a + b;

// myFunction3(); // ❌ Cannot call before initialization ⚠️
const myFunction3 = () => { // Can be re-declared with let or var 🔄
    console.log("Hello, Sir! 🤵");
}
myFunction3(); // 🎩
