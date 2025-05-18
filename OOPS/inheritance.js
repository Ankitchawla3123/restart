
class user{
    constructor(username, age=352){ // default age set
        this.username=username;
        this.age=age


    }
    logme(){
        console.log(`username is ${this.username}`);

    }
}

class teacher extends user{
    constructor(username, email,password){
        super(username) // BEHIND THE SCENE IT IS CALLING CALL FUNCTION .call(this, username    )
        
        this.email=email;
        this.password=password; 
    }

    addcourse(){
        console.log(`New course was added by ${this.username}`);
        
    }
}

const ournewteach=new teacher("SPY_D","asdasd","pasdasd");
console.log(ournewteach);

// example use case 
// I created the user 1st now i want that user to be a teacher 

const justauser=new user("SPYD",213);
const newteacher= new teacher(justauser.username, "sadasd ", "asdasd");
console.log(justauser);
console.log(newteacher);

newteacher.addcourse()
// justauser.addcourse()  this will show an error 

console.log(justauser instanceof teacher);
console.log(newteacher instanceof user);
console.log(newteacher instanceof teacher);


