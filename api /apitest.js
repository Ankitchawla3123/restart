// learning fetch

// PROMISE IN AN OBJECT

const promise1= new Promise(function(resolve, reject){
    // do an aysnc task 
    setTimeout(function(){
        console.log("aysnc task is complete");
        resolve()
    },1000)
    // resolve() cannot put here it will cause issue it will be resolved before the aysnc task was completed
}) // it will take call back

promise1.then(function(){ // will only wroked after the task is done or resolved
    console.log("promise consumed");
    
}) 

const promise2= new Promise(function(resolve, reject){
    // do an aysnc task 
    setTimeout(function(){
        console.log("2nd aysnc task under promise");
        resolve()
    },2000)
}).then(function(){
    console.log("promise2 done");
}) // it will take call back and no need for making another thing again directly we can also resolve

const promise3= new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("3rd aysnc task under promise");
        resolve({
            "username":'SPYD3123',
            "email":"ye hai mera email",
        }) // we can pass the object also
    },3000)
})

promise3.then((user)=>{
    console.log("function to tell that promise is resolved");
    console.log("here is the parameter passed by the resolved user", user); // once promise is done
})

const promise4= new Promise(function(resolve, reject){
    // do an aysnc task 
    setTimeout(function(){
        // console.log("4th aysnc task under promise");
        let error=false;
        if (!error) {
            resolve({
                "username":'SPYD3123',
                "email":"ye hai mera email",
            }) // we can pass the object also
        }else{
            reject("ERROR: something went wrong")
        }
    },4000)
})


promise4.then((user)=>{
    console.log("this is the one i get in 1st then, " , user);
    return user.username // return will done in then of next
}).then((username)=>{
    console.log(username);
}).catch((err)=>{
    console.log("this is the error",err);
}).finally(()=>{
    console.log("we are in finally it will excute always after promise is either resolved or rejected it will be must run");
    console.log(" ");
    
})


const promise5= new Promise(function(resolve, reject){
    // do an aysnc task 
    setTimeout(function(){
        // console.log("4th aysnc task under promise");
        let error=true;
        if (!error) {
            resolve({
                "username":'ankitchawla3123',
                "email":"ankitchawla3123@gmail.com",
            }) // we can pass the object also
        }else{
            reject("new error in promise 5 via try catch in aysnc await")
        }
    },5000)
})


// we will handle promise from aysnc await

async function consumepromise5() {
    try {
        const response = await promise5;
     console.log("this is my response from aysnc await",response); // if error then it will fail
    } catch (error) {
        console.log(error)
    }
     
     
}

consumepromise5()
