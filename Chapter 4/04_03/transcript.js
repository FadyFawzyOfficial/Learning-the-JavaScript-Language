// &&
// ||

let animal1 = "monkey", animal2 = "bear", animal3 = "tiger";

animal1 === "monkey" && animal2 === "bear"; // true
animal1 === "ape" && animal2 === "bear"; // false
animal1 === "ape" && animal2 === "bear" && animal3 === "tiger"; // false
animal1 === "monkey" && animal2 === "bear" && animal3 === "tiger"; // true

animal1 === "monkey" || animal2 === "bear"; // true
animal1 === "ape" || animal2 === "bear"; // true
animal1 === "ape" || animal2 === "ostrich"; // false

animal1 === "monkey" || animal2 === "monkey" && animal3 === "tiger"; // true
console.log(animal1 === "monkey" || animal2 === "monkey" && animal3 === "tiger");
(animal1 === "monkey" || animal2 === "monkey") && animal3 === "tiger"; // true
console.log((animal1 === "monkey" || animal2 === "monkey") && animal3 === "tiger");

!true; // false
!false; // true

animal1 === "monkey" && animal2 === "zebra"; // false
!(animal1 === "monkey" && animal2 === "zebra"); // true
animal1 !== "monkey" && animal2 !== "zebra"; // false
animal1 !== "monkey" || animal2 !== "zebra"; // true
