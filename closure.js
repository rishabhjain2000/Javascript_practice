//Q1-tell the output
//rishabh jain
// let count=0;
// (
//     function printCount(){
//         if(count===0){
//             let count=1; //shadowing
//             console.log(count); //1
//         }

//         console.log(count)  //0
    
// })() 


//Q2-write a function that would allow you to do this
// function create(num)
// {
//     return function(innernum){
//         return innernum+num;
//     }
// }

// var add=create(6);
// console.log(add(10)); //16
// console.log(add(21)); //27

//Q3-how to use to optimize time of code

// function find(index)
// {
//     let a=[]
//     for(let i=0;i<1000000;i++)
//     {
//         a[i]=i*i;
//     }
//     console.log(a[index])
// }

// console.time("6")
// find(6)
// console.timeEnd('6')
// console.time("12")
// find(12)
// console.timeEnd("12")

//apply the closure
// function find()
// {
//     let a=[]
//     for(let i=0;i<1000000;i++)
//     {
//         a[i]=i*i;
//     }
//     return function(index){

//         console.log(a[index])
//     }
// }
// const closure=find()
// console.time("6")
// find(6)
// console.timeEnd('6')
// console.time("12")
// find(12)
// console.timeEnd("12")

//Q4 setTimeout object
  
    //if we declare let so let has block scope output is 0 1 2
    // function a(){
    //     for(let i=0;i<3;i++)
    //     {
    //         setTimeout(function log(){
    //             console.log(i)
    //         },i*10000);
    //     }
    // }
    // a();
    
//if we declare var so let has global scope output is 3 3 3

// function a(){
//     for(var i=0;i<3;i++)
//     {
//         setTimeout(function log(){
//             console.log(i)
//         },i*10000);
//     }
// }
// a();

//task is make change in above code print 0 1 2

// function a(){
//     for(var i=0;i<3;i++)
//     {
//         function inner(i){
//         setTimeout(function log(){
//             console.log(i)
//         },i*10000);
//        }
//        inner(i)
//    }
// }
// a();


//Q-Make this run only once

// function likethevideo()
// {
//     let called=0;

//     return function(){
//         if(called>0)
          
//         {
//             console.log("Already subsribed")
//         }
//         else{
//             console.log('run once')
//             called++;
//         }
//     }
// }

// let issub=likethevideo()
// issub()
// issub()

 