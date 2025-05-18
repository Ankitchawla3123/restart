
function setusername( username){
    this.username=username; // it is setting up here not in the below function
    console.log("function called");
    
}

function createuser( username, email, password ){
    setusername.call(username) // it is called techinically here and execution context of current is taken but not doing the work we want but execution context is also removed once the call is done
    
    // to hold the reference  as we aren;t able to change this in our main object/ do it on the outer/ current div instead of this used by the setuser name
    setusername.call(this,username) // now value will be hold in curret execution context 

    // so call help us pass our courrent execution context to the function but when we use this with call it also hold the updates done by that 
    
    // this.username=username
    this.email=email;
    this.password=password;
}

const newuser= new createuser("ankii" , "newjob@gmail.com", "ajskda");   // setusername is not called
console.log(newuser);
