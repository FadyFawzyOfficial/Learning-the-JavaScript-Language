var fady = {
    name: "fady",
    bestFriend: "Hobbes",
    form: "human boy",
}

console.log(fady);

// you can also pass an object to a function
// because objects are using a copy of a reference, the argument will be modified
function transmogrifier(fady){
    if( typeof fady !== 'object'){
        console.error('Fady is not an object');
        return;
    }

    // generate a random number between 1 and 5
    var randomNumber = Math.floor(Math.random() * 5) + 1;

    switch (randomNumber) {
        case 1:
          fady.form = "tyrannosaurus";
          break;
        case 2:
            fady.form = "grey wolf";
          break;
        case 3:
            fady.form = "bengal tiger";
          break;
        case 4:
            fady.form = "grizzly bear";
          break;
        case 5:
            fady.form = "canary";
          break;
        default:
          // he stays human
          fady.form = "human boy";
          break;
      }
}

transmogrifier(fady);
console.log(fady);

// This version of the transmogifier does return a copy, leaving the original alone
function transmogrifierCopy(fady){
    if( typeof fady !== 'object'){
        console.error('Fady is not an object');
        return;
    }

    // generate a random number between 1 and 5
    var randomNumber = Math.floor(Math.random() * 5) + 1;

    var newForm = fady.form; // by default, do not change

    switch (randomNumber) {
        case 1:
          newForm = "tyrannosaurus";
          break;
        case 2:
            newForm = "grey wolf";
          break;
        case 3:
            newForm = "bengal tiger";
          break;
        case 4:
            newForm = "grizzly bear";
          break;
        case 5:
            newForm = "canary";
          break;
        default:
          // he stays human
          newForm = "human boy";
          break;
      }

      // return a new object that's just like fady,
      // but transmogrified!
      return {
        name: fady.name,
        bestFriend: fady.bestFriend,
        form: newForm,
      }
}

fadyCopy = transmogrifierCopy(fady);
console.log(fadyCopy); 
console.log(fady);