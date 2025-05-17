// object litreal

const user={  // basic unit
    username: "Ankit",
    logincount: 9,
    signedin: true,
    getuserdetails: function(){
        console.log(this.username, "got username"); // tells hte current context
        console.log(this);
        
    }
}


console.log(user.getuserdetails()); // undfined also 
console.log(this);

// CONSTRUCTOR FUNCTION
// new is the constructor function

const date= new Date()
// new create the new context

function Userfunc(username, logincount, signedin){
    this.username= username
    this.logincount=logincount
    this.signedin=signedin
    this.greetings = function (){
        console.log('YOOOO ', this.username);
        
    }
    
    return this // without return this this would also work
}

const user1= new Userfunc("hey",13,true);
const user2=new Userfunc("new user", 134,true) // new instance

console.log(user1.constructor); // it is the refence for the function where it was made
console.log(user2);



// user 2 overwrite the value of user 1 issue caused
// that is why new keyword is used in promise / constructor function

// new keywords creates the empty object always 
// constructor function is called because of new keyword

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car("Honda", "Accord", 1998);
const newobject= new Car("meri car", "latest model", 2055)
console.log(newobject);


console.log(auto instanceof Car);
// Expected output: true

console.log(auto instanceof Object);
// Expected output: true
