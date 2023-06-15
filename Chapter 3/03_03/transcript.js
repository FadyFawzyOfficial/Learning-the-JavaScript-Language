var bird = {
    genus: "corvus",
    species: "corvax",
    commonName: "raven",
    callType: "squawky",
    quote: "Nevermore",
    maxOffspring: 5,
    noisy: true,
    deadly: false,
};

bird.quote;
console.log(bird.quote);

// bird."quote"; // this does not work

bird["quote"];
console.log(bird["quote"]);

bird.color = "black";
bird;
console.log(bird);

bird["where it lives"] = "in a tree";
bird.whereItLives  = "in a tree";
console.log(bird.whereItLives);
console.log(bird["where it lives"]);
console.log(bird);

delete bird.color;
bird;
console.log(bird);