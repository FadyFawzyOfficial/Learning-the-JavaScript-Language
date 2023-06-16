var cherub = "Cupid";
// cherub = 'Norman';

if (cherub === "Cupid") console.log("Ouch, an arrow!  Ooo, I'm in love!");

if (cherub === "Cupid") console.log("Ouch, an arrow!  Ooo, I'm in love!");
else console.log("I feel nothing!");

let errorMsg = ''; // Empty String is falsy

if (errorMsg) {
  console.error('There was an error', errorMsg);
}

if (!errorMsg) {
  console.log('Yay! No errors!');
}

let errors = []; // empty array is truthy

// if (errors) { // Nope - empty arrays are truthy

if (errors.length) {
  console.error("Please fix these errors", errors);
}
