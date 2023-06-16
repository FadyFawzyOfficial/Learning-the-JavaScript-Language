var thing = 12;
thing = "twelve";
typeof thing;
console.log(typeof thing);

thing = 12;
typeof thing;
console.log(typeof thing);

thing = false;
typeof thing;
console.log(typeof thing);

thing = {};
typeof thing;
console.log(typeof thing);

thing = [];
typeof thing;
console.log(typeof thing);
typeof thing === "object" && thing.hasOwnProperty("length"); // true    // Check it is array and differentiate it from normal object

thing = {};
typeof thing === "object" && thing.hasOwnProperty("length"); // false   // It's a normal object and not an array

NaN;
typeof NaN; // number
console.log(typeof NaN);
Number.isNaN(); // use this to differentiate NaN

typeof null; // object
console.log(typeof null);
thing === null; // false
console.log(thing === null);
thing = null;
thing === null; // true
console.log(thing === null);

let somethingLater;
typeof somethingLater; // undefined
console.log(typeof somethingLater);
typeof nothingSilly; // undefined
console.log(typeof nothingSilly);