console.log("Working");

// // // // problem 2 :-
// // // //===>

 let count = 0;
 (function immediate() {
   if (count === 0) {
     let count = 1;
     console.log(count); // What is logged?
   }
    console.log(count); // What is logged?
  })();
 // //output :- 1 0
 

 for (var i = 0; i < 3; i++) {
     setTimeout(function log() {
       console.log(i); // What is logged?
     }, 1000);
   }
   ///Output :- three times 3 




// // problem 5 :-
var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + "outerArg" + "\n" +
        "innerArg = " + "innerArg" + "\n" +
        "outerVar = " + "outerVar" + "\n" +
        "innerVar = " + "innerVar" + "\n" +
        "globalVar = " + "globalVar");
    
    })(456);
})(123);


// problem 6 :- Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

const outerFunction = function(length){
    innerFunction = function(breadth){
        console.log(`the area of ractangle is ${length*breadth}`);
    }
}
outerFunction(20);
innerFunction(50);

// // problem 7 :- Take a variable in outer function and create an inner function to increase the counter every time it is called

let outer = function(){
    variableCount = 0;
    inner = function(){
        console.log(`the count is ${variableCount+=1}`)
    }
}

outer();
inner();
inner();
inner();
inner();
inner();