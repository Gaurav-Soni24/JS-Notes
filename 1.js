// 📌 1. Basics of JavaScript 📝

// ❓ Q1: What is JavaScript?
// JavaScript is a 🌍 high-level, interpreted programming language that enables dynamic content on websites. 
// It is primarily used for adding ⚡ interactivity to web pages and is executed by the browser. 

// 🔢 Q2: What are the data types in JavaScript?
// ✅ Primitive types: Number 🔢, String 📝, Boolean ✅❌, undefined 🚫, null 🕳️, Symbol 🔣, BigInt 🔢.
// ✅ Reference types: Object 🏗️, Array 📦, Function ⚙️, Date 📆, etc.

// 🔄 Q3: What is the difference between var, let, and const?
// 🟢 var: Function-scoped and can be redeclared. ❌ Not recommended for modern JS.
// 🟡 let: Block-scoped and cannot be redeclared in the same scope.
// 🔴 const: Block-scoped, cannot be redeclared or reassigned.

{
    var varible1 = 4;   // ✅ Allowed
    varible1 = 5;       // 🔄 Reassigning is possible

    let varible2 = 7;   // ✅ Allowed
    varible2 = 8;       // 🔄 Reassigning is possible

    const varible3 = 9; 
    // varible3 = 10; ❌ Reassigning is NOT allowed!
}

console.log(varible1); // ✅ Works (var has global scope)
// console.log(varible2); ❌ Error (let has block scope)
// console.log(varible3); ❌ Error (const has block scope)
