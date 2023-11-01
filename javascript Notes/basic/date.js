// // Dates

// let myDate = new Date()
// console.log(myDate); //2023-11-01T19:02:37.191Z
// console.log(myDate.toString()); //Thu Nov 02 2023 00:32:37 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());//Thu Nov 02 2023
// console.log(myDate.toLocaleString());//2/11/2023, 12:32:37 am
// console.log(typeof myDate);//object

// // let myCreatedDate = new Date(2023, 0, 23)
// // let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// // let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); //convert millisecond to second

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})