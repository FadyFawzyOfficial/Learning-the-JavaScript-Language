function speakSomething(what = 'Default speech', howMany = 0){
    for (let i = 0; i < howMany; i++) {
        console.log(what + " (" + i + ")");
    }
}

speakSomething("Good morning", 5);
speakSomething("Good morning");
speakSomething();

function addingMachine(){
    // initialize the total we'll be returning
    var total = 0;

    for (let i = 0; i < arguments.length; i++) {
        // grab the next number
        const number = arguments[i];
        
        // check if the argument is a number.
        // if so, add it to the running total
        if(typeof number === 'number'){
            total += number;
        }
    }

    // done - return the total
    return total;
}

console.log(addingMachine(1,2,3, 4));
console.log(addingMachine(1, 2, 3, 4, 5, 6, 7, 8, 9, 1204910249014));