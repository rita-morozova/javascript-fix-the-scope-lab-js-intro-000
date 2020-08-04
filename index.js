var animal = 'dog'

function myAnimal() {
  // You should not need to modify this function
  return animal
}

function yourAnimal() {
  var animal = "cat";
  return animal
}

function add2(n) {
  const two = 2;
 return n + two
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.

<<<<<<< HEAD
var theFunk = funkyFunction()()
theFunk();
=======
var theFunk = funkyFunction();
>>>>>>> b0690a83df94c826b0c8d270ae2a55a9e16f46e0


