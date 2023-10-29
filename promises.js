//  call vs bind vs apply


let name={
    firstname:"rishabh",
    lastname:"jain",
   
}

let printfulName=function(hometown,state){   
    console.log(this.firstname+ " " + this.lastname+' from '
    +hometown+' , '+state)
}

printfulName.call(name,"dehadun","utrakhand")


let name2={
    firstname:"sachin",
    lastname:"jain",
}

// //function borrowing
printfulName.call(name2,"mumbai","maharashraa")

printfulName.apply(name2,["mumbai","maharashraa"])




//bind method-it give the copy which invoke later
let printmyname=printfulName.bind(name2,'mumbai','sreinagar')
console.log(printmyname)
printmyname() 