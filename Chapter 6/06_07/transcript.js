// Allowing this code to work in a browser as well as node
console.log(typeof window)
if (!global && typeof window !== 'undefined') {
  var global = window;
}

var myNum = 32;
var myResult = "Success!";

function randomizer(limit) {
  var randomNumber = Math.floor(Math.random() * limit);

  var myNum = randomNumber;

  console.log("Local myNum is", myNum);
  console.log("Global myNum is", global.myNum);

  console.log("Our result is", myResult);

  return myNum;
}

randomizer(10);

function doubleIt(num) {
  var myNum = num * 2;

  return myNum;
}

if (1 === 1) {
  const oneIsOne = 'Yes indeed.';
  console.log('One is one, right?', oneIsOne);
}

console.log('One is still one, right?', oneIsOne); // ReferenceError