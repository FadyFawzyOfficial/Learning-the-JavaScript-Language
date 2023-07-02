function addingMachine(...terms){
  // initialize the total we'll be returning
  var total = 0;

  for (let i = 0; i < terms.length; i++) {
      // grab the next number
      const number = terms[i];
      
      // check if the argument is a number.
      // if so, add it to the running total
      if(typeof number === 'number'){
          total += number;
      }
  }

  // done - return the total
  return total;
}

function bake(temp = 320, time = 35, ...flavors) {
  console.log(`Let's bake this cake at ${temp} degrees,`);
  console.log(`for ${time} minutes\n`);

  if(flavors.length > 0 ){
    console.log("And let's not forget these flavors", flavors);
  }

  console.log("Arguments contains everything", arguments);
}

bake(425, 30, 'chocolate', 'lemon', 'black forest');
bake(300, 30, 'vanilla');
bake();