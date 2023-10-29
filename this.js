// //this keyword in javascript (implicit binding)
// //explain this keywrd?

// //this point to a global object/parent variable

// //Output?

//  const user={
//     firstName:"piyush",
//     getname(){
//       const firstName="rishabh"
//       return this.firstName
//     } 
//  }
// console.log(user.getname())
function saySomething(message)
    {
    return this.name + " is " + message;
    }

    var person4 = {name: "John"};
console.log(saySomething.apply(person4, ["awesome"]));


// //what is result of accesning its ref?

// // function makeuser(){
// //     return{
// //         name:"john",
// //         ref:this,
// //     }
// // }
// // let user=makeuser();
// // console.log(user.ref.this)//undefined


// //Output?

// const user={
//     name:"rishabh",
//     log(){
//         console.log(this.name)
//     }
// }
// //it give undefined because set timeout use user.log as a callback
// //rather than a method so ithave no longer access
// // setTimeout(user.log,1000)

// //now its invoked as a method
// setTimeout(
//     function()
//     {

//         user.log()
//     }
//     ,1000)



// //Output?
// //Output?




// //Output?
// //Output?
// //Output?