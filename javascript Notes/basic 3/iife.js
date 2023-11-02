// Immediately Invoked Function Expressions (IIFE)
/*IIFEs prevent pollution of the global JS scope.
 In a traditional function, if you create a variable within
  the function, it is accessible in the global object. 
  If you define a variable in 
an IIFE, it is accessible only directly within the function.*/

// (function chai(){
//     // named IIFE
//     console.log(`DB CONNECTED`);
// })();

// ( (name) => {
//     console.log(`DB CONNECTED TWO ${name}`);
// } )('hitesh')


var x=10;

function  test(x){
   var x=100
   return x;
}
console.log(test(x));

console.log((function(x){
    x=3
    return x;
})())