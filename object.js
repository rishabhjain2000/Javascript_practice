// //dynamic object in js

// const property='name'

// const user={
//     [property]:'road',
//     age:24
// }
// console.log(user)

// //loop on object

// for(key in user)
// {
//     console.log(key)
//     console.log(user[key])
// }

// //outpt?
// const obj={
//     a:"one",
//     b:"two",
//     a:"three"
// }
// console.log(obj)

// //output?

// const a={}
// const b={key:'b'}
// const c={key:'c'}

// a[b]=123
// a[c]=456

// //we have b and c as a object { '[object Object]': 456 }
// console.log(a[b])  //456
// console.log(a) 

// //what is json.stringfy and jon parse
// const js={
//     a:"one",
//     b:"two",
//     a:"three"
// }
// const str=JSON.stringify(js);
// console.log(str);


// console.log(str.a)// in key string  for give undefined
// console.log(JSON.parse(str))

// //spread operator

// console.log([..."rishabh"])

// //ouptut
// const setting={
//     a:"one",
//     b:"two",
//     a:"three"
// }
// const data=JSON.stringify(setting,['b','c']);
// console.log(data);

// //output
// const shape={
//     radius:10,
//     diameter(){
//         return this.radius*2;
//     },
//     Perimeter:()=>2*Math.PI*this.radius
// }
// console.log(shape.diameter())
// //in arow function this keyword refer to global object
// console.log(shape.Perimeter()) // Output Nan


// //destructring

// let us={
//     name:"ridhabj",
//     age:30
// };

// const name='suraj';

// const {name:myname}=us;
// console.log(name)

// //object referecing

let c={greeting:'hey'};
let d;

d=c;
c.greeting="hello"
console.log(d.greeting) //hello

//ouput

console.log({a:1}=={a:1})
console.log({a:1}=== {a:1})
//both answer is false because bth has different referencne memory


//output
const value={number:10}

const multiply=(x={...value})=>{
    console.log(x.number*=2)
}

//object is clone 
multiply() //20
multiply()  //20

//when we pass object it passsed as a reference
//In this not take default value
multiply(value) //20 //modify object value when passed by reference
multiply(value) //40

//shallow copy vs deep copy

/*.
 A deep copy means that all of the values of the new 
variable are copied 
and disconnected from the original variable.
A shallow copy means that certain (sub-)values are
still connected to the original variable.
*/

//how to deep copy a object?

const user={
    name:"rishabh",
    age:14
}

//1ways
//    const objclone=Object.assign({},user)

//2ways
//   const objclone=JSON.parse(JSON.stringify(user))

//3ways
const objclone={...user}
objclone.name='suraj'
console.log(user,objclone)
