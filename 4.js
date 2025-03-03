// 🌍 Global Execution Context (GEC) is created
console.log("🌍 Global Execution Context Created");

// 📦 Execution Context Diagram
/*
         Execution Context 📦

   ┌───────────────────────────────┐
   │        Variable Environment   │
   │                               │
   │  Memory (Heap)                │
   │  ┌─────────────────────────┐  │
   │  │ key : value             │  │
   │  │ a   : 10                │  │
   │  │ fn  : { ... }           │  │
   │  └─────────────────────────┘  │
   │                               │
   │  Thread of Execution          │
   │  ┌─────────────────────────┐  │
   │  │  ○                      │  │
   │  │  ○                      │  │
   │  │  ○                      │  │
   │  └─────────────────────────┘  │
   └───────────────────────────────┘
*/

// 🎭 Hoisting in JavaScript 🤹‍♂️

// 🔹 Hoisting with `var`
console.log(name); // ❓ Undefined (Hoisted but not initialized)
var name = "Gaurav";
console.log(name); // ✅ "Gaurav"

// 🔹 Hoisting with `let` & `const`
try {
    console.log(age); // ❌ ReferenceError (TDZ - Cannot access before initialization)
} catch (error) {
    console.log("⚠️ ReferenceError: Cannot access 'age' before initialization");
}
let age = 20;
console.log(age); // ✅ 20

// 🔹 Hoisting with Functions
greet(); // ✅ Works! "Hello, World!"
function greet() {
    console.log("Hello, World! 🌍");
}

// ❌ Hoisting with Function Expressions
try {
    greetAgain(); // ❌ TypeError: greetAgain is not a function
} catch (error) {
    console.log("⚠️ TypeError: greetAgain is not a function");
}

var greetAgain = function () {
    console.log("Hello Again! 🔄");
};

// 📝 Summary:
// ✅ `var` is hoisted but initialized as `undefined`
// ✅ Function declarations are fully hoisted
// 🚫 `let` & `const` remain in **Temporal Dead Zone (TDZ)**
// ⚠️ Function expressions behave like `var` (hoisted but undefined)
