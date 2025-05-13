// function declaration

function square(width, height){
    return width * height}
square(10, 5);
console.log(square(10, 5))

//function expression
const square1 = function(width1, height1){
    return width1*height1
}
square1(4,5);
console.log(square1(4,5));

//Arrow function expression (Arrow function)
const square2 = (width2, height2) => width2*height2
square2(10,9);
console.log(square2(10,9));





// const { strictEqual } = require("assert");

// function pow(number) {
//     return number ** 2;
    
//   }
  
//   pow(2);
//   console.log(pow(2))