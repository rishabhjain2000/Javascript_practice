// const myFunction = () => {
//     let myValue = 2;
//     console.log(myValue);

//     const childFunction = () => {
//          console.log(myValue += 1);
//     }

//     return childFunction;
// }

// const result = myFunction();
// console.log(result);
// result();
// result();
// result();

//reduce

// let arr=[10,1,2,3,4,5]

// let sum=arr.reduce((accum,curr)=>{
//     console.log(accum)
//     console.log(curr)
//     return accum;
// })
// console.log(sum)

function print() {
    console.log(arguments)
  }
//   The arguments object is a local variable that contains the arguments passed to the function when called. Let's try it out:
  print("hello", 400, false)
  