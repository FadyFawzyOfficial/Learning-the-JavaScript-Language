var animal = {
  genus: "corvus",
  species: "corvax",
  commonName: "raven",
  callType: "squawky",
  quote: "Nevermore",
  maxOffspring: 5,
  noisy: true,
  deadly: false,
};
animal;
console.log(animal);

var animal2 = animal;
animal2;
console.log(animal2);

animal2.genus = "ursus";
animal2;
console.log(animal2);
animal;
console.log(animal);

animal = {
  genus: "corvus",
  species: "corvax",
  commonName: "raven",
  callType: "squawky", // there is a deliberate bug here in the course, removed for your convenience :)
  quote: "Nevermore",
  maxOffspring: 5,
  noisy: true,
  deadly: false,
};

// Copy Object
animal2 = Object.assign({}, animal);
console.log(animal2);
animal2 = {...animal};
animal2 = JSON.parse(JSON.stringify(animal));

animal2.genus = "ursus";
animal2;
console.log(animal2);
animal;
console.log(animal);

// bonus: make a copy of an object safely
animal2 = Object.assign({}, animal);
animal2 = { ...animal };
animal2 = JSON.parse(JSON.stringify(animal));

animal2.genus = "ursus";
animal2;
animal;