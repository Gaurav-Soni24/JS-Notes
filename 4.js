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

//call stack maintains the order of execution of execution context

// Javascript is a synchronous single threaded language
// which means it can only process one task at a time.
// However, it can handle multiple tasks efficiently using non-blocking I/O and asynchronous programming

// 4. Asynchronous JavaScript ⏳

// Q1: What is the Event Loop?
// The Event Loop handles asynchronous operations by managing the execution stack, callback queue, and microtasks.



// Q2: What are Promises in JavaScript?
// A Promise represents a value that may be available now, in the future, or never.
//  let promise = new Promise((resolve, reject) => {
//   if (condition) resolve('Success');
//   else reject('Error');
// });


// Q3: What is async/await?
// async functions always return a promise, and await pauses execution until the promise resolves.
//  async function fetchData() {
//   let response = await fetch(url);
//   return response.json();
// }
