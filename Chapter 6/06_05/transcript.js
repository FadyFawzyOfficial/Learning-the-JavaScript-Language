function speakSomething(what = 'Speaking!') {
  for (var i = 0; i < 10; i += 1) {
    console.log(what);
  }
}

var speakSomething = function speakSomething(what = 'Speaking!') {
  for (var i = 0; i < 10; i += 1) {
    console.log(what);
  }
};

setTimeout(speakSomething, 5000);

var obj = {
  sayHello: function () {
    console.log('Hello');
  }
}

obj.sayHello();