
class User{
    constructor(Username, email , pass){ // we can avoid the constructor also if we want
        this.Username=Username;
        this.email=email,
        this.password=pass;
    }

    encryptpass(){
        return `${this.password}abc`;
    }
    changeusername(){
        this.Username=this.Username.toUpperCase();
        return `${this.Username}`;
    }
}

const newuser= new User("hasdlloo", "ankitchawla3123@gmail.com", "spyd3123");
console.log(newuser.encryptpass()); // will run the method
console.log(newuser.changeusername());



//behind the scene 
function user( Username, email , pass){
        this.Username=Username;
        this.email=email,
        this.password=pass;
}

user.prototype.changeusername=function(){
    return console.log( this.Username.toUpperCase());
}

const neuser=new user("asdas", "asda", "asdasdasdas")

neuser.changeusername();