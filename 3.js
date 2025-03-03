// 📦 3. Objects and Arrays  
// ❓ Q1: What is the difference between == and ===?  
// ✅ ==: Compares values after type coercion.  
// ✅ ===: Compares both values and types (strict equality).  

// ❓ Q2: How do you create a deep copy of an object?  

// 🏷️ Shallow copy:  
// 📌 let objCopy = { ...obj };

let obj = {
    name: "Gaurav Soni",
    age: 20
}

console.log("📝 Original Object:", obj);

let objCopy = {
    ...obj,
    branch: "CSE" // 🏫 Adding a new property
}

console.log("📌 Original Object After Shallow Copy:", obj);
console.log("📌 Shallow Copied Object:", objCopy);

// ⚖️ They will NOT be equal (Different memory references)
console.log("🔍 obj === objCopy:", obj === objCopy);
console.log("🔍 obj == objCopy:", obj == objCopy);

// 🏷️ Deep copy:  
// 📌 let deepCopy = JSON.parse(JSON.stringify(obj));

let objCopy2 = JSON.parse(JSON.stringify({...obj}));
// Alternative way: JSON.parse(JSON.stringify({...obj, branch: "CSE"})) 

console.log("🛠️ Deep Copied Object:", objCopy2);

// ⚖️ They will NOT be equal (Different memory references)
console.log("🔍 obj === objCopy2:", obj === objCopy2);
console.log("🔍 obj == objCopy2:", obj == objCopy2);

// ⚠️ Note: This method does NOT support functions, undefined, or special objects.  
// ✅ Alternative: Use structuredClone(obj) or Lodash’s _.cloneDeep(obj).  

// ❓ Q3: What is destructuring in JavaScript?  
// 🎯 Destructuring allows unpacking values from arrays or objects.  

// Example:
const { name, age } = obj;  

console.log("🛠️ Destructured Values:", name, age);
