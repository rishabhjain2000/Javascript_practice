function makeuser(){
    return{
        name:"john",
        ref:this,
    }
}
let user=makeuser();
console.log(user.ref.this)