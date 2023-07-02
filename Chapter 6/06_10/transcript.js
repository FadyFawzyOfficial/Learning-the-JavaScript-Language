function doubleIt(number){
  return number *= 2;
}

var myNumbers = [1, 2, 3, 4, 5];
console.log(myNumbers);

var myDoubles = myNumbers.map(doubleIt);
console.log(myDoubles);

myNumbers.forEach(function (number) {
  console.log('my array contains', number);
});

myNumbers.forEach((number) =>{
  console.log('my array contains', number);
});

// this is a browser-based example
const myTextField = document.getElementById("myTextField");
myTextField.addEventListener("keyup", () => {
  console.log("Someone is typing!");
});