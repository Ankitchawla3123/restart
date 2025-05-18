class User{
    static counter=0;
    constructor(Username){
        this.Username=Username;
        this.id= User.createID(); // not directlyy create id or this.create id wouln't have worked out it is a class method     
        User.counter++; // increment the counter


    }
    logme(){
        console.log(this.Username, "logged in ");
    }

    static createID(){ // doesn't allow the access below only in class
        return `12324`;
    }
    static returncount(){ // IF I DONT PUT STATIC HERE I WON'T BE ABLE TO CALL FROM CALSS NAME only will be able to call with the user/ object
        return User.counter;// error if i directly return counter i have to specify the class
    }
    
}

const neuser= new User("my name ");
// can call N number of times we have to stop it
// console.log(neuser.createID());

console.log(neuser.id);


class teacher extends User {
    constructor(username,email) {
        super(username);
        this.email=email;
    }
}

const newteacher=new teacher("asda","asdasdsad")
console.log(newteacher);
newteacher.logme()
console.log(User.returncount());
