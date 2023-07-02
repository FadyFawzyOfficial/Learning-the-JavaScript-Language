// Before:
const speak = function () {
  console.log("Arf");
  console.log("Woof");
  console.log("Meow");
  console.log("Moo");
};

// After:
const speaking = () => {
  console.log("Arf");
  console.log("Woof");
  console.log("Meow");
  console.log("Moo");
}

// Before:
function isEven(num){
  return num % 2  === 0;
}

// After: 
let isEven = (num) => {
  return num % 2  === 0;
}

// or: 
let isEven = (num) => num % 2 === 0;

// And most succinctly
isEven = num => num % 2 === 0;