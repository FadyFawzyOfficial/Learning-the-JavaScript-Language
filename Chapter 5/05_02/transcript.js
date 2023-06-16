// iterate over an array
var pageNames = [
  "Home",
  "About Us",
  "Contact Us",
  "JavaScript Playground",
  "News",
  "Blog",
];

for (let i = 0; i < pageNames.length; i += 1) {
  console.log(i, pageNames[i]);
}

//! Keys and values where keys are indices.
//! Remember array is an object in JavaScript
for (var p in pageNames) {
  console.log(p, pageNames[p]);
}

//! Only values (use "of" instead of "in")
for (var v of pageNames) {
  console.log(v);
}

// iterate over an object
var pages = {
  first: "Home",
  second: "About Us",
  third: "Contact Us",
  fourth: "JavaScript Playground",
  fifth: "Blog",
};

//! p will be the keys
for (var p in pages) {
  if (pages.hasOwnProperty(p)) {
    console.log(p, pages[p]);
  }
}

//! Summary for 'in' will carry the keys and for 'of' will carry the values