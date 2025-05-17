// java script has protyple behaviour, it goes into depth until it finds null or the req thing 
// this, classes and all got through all are from prototype
// if log the array in browser we get a prototype with it 

// prototyple inhertiance going to depth

function mutilplyby5(num){
    this.num=num;
    return num*5;
}

mutilplyby5.power=2;

console.log(mutilplyby5.prototype); // return {} means it sets the empty object/ by default context
// it also give internal properites we could give 
// that empty paranthisis will store the reference of all the this thing made 
console.log(mutilplyby5.power);

// function is also a OBJECT reference 
// EVERYHTING AS AN OBJECT IN JAVASCRIPT

function createUser(username, score){
    this.username= username; // current context is also set 
    this.score= score;
}

// cam we also implement our functionality???????

createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.printusername=function(){
    console.log(this.username);
    
}


const user1 = new createUser("Ankit", 9)
const user2 = new createUser("Next",11)

user1.printusername() // without new it will be an issue cuz it let us make empty object/ new context which all us to add methods in our prototype