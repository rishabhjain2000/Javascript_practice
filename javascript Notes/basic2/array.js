
// const myArr = [0, 1, 2, 3, 4, 5]
// const myHeors = ["shaktiman", "naagraj"]

// const myArr2 = new Array(1, 2, 3, 4)
// // console.log(myArr[1]);

// // Array methods

// // myArr.push(6)
// // myArr.push(7)
// // myArr.pop()

// // myArr.unshift(9)//insert in front of array
// // myArr.shift() //remove value from front

// // console.log(myArr.includes(9));//boolean check value include or not
// // console.log(myArr.indexOf(3));

// const newArr = myArr.join() //Adds all the elements of an array into a string, separated by the specified separator string.

// // console.log(myArr);
// // console.log(type newArr);


// console.log("Slice");

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3) // last not include

// console.log(myn1);
// console.log("B ", myArr);


// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);
// //Slice is used to get a new array from the original array
// // whereas 
// //the splice is used to add/remove items in the original array

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);//insert [1, []]
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros) //merge array
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))//chek whether arrsy or not
console.log(Array.from("Hitesh"))//convert int array
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));