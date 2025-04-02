
var c=3000 // issue created 2 times global scope
let a=200
const username='adfasd'
if (true) { 
    let a=10
    const b=20
    var c=30
    console.log(a); //block scope
    console.log(username); // will work 
    
    

}
{// this the block scope

}
// console.log(a);
// console.log(b);
console.log(c);
console.log(a); // global scope

// only c would work cuz of the scope of var

function one(){
    const name='Ankit'
    function two(){
        const website="newwebsite"
        console.log(name);
    }
    // console.log(website); // error
    two()
    // console.log(website) still error cuz block scoped variable

}

one() 

console.log(addone(4));// will work even before intialization
function addone(a){
    return a+1;
}

// console.log(addtwo(33)); // won't work cuz function declared as variable and we are using it before intialization

const addtwo= function(a){
    return a+2;
}
console.log(addtwo(33));