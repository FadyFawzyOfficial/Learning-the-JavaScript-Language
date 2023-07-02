const a = fuddify("Be very quiet, I'm hunting rabbits.");
console.log(a);
const b = fuddify("You screwy rabbit.");
console.log(b);
const c = fuddify("Rabbit tracks!");
console.log(c);

function fuddify(speech) {
    // if it's not a string, return an error message
    if (typeof speech !== "string"){
        console.error('Nice twy, wabbit!');
        return;
    }

    // otherwise, make it sound like Elmer Fudd
    speech = speech.replace(/r/g, 'w');
    speech = speech.replace(/R/g, 'W');

    return speech;
}

var utterance = fuddify('You screwy rabbit');
console.log(utterance);

function isEven(num){
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(12));

function isEven(num){
   return num % 2 === 0;
}