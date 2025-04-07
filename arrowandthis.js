const user= {
    username: "Ankit",
    price : 999,
    welcomemessage: function (){
        console.log(`${this.username} yoooooo`) // it is the current context
        // console.log(this) // context / object will be printed
    }
}

user.welcomemessage()
user.username='SPY_D'
user.welcomemessage() // depending on current context print the values
console.log(this) // empty object in node enviornment but in browser it is window  (global objects)

function thischeck(){
    let username='SPY_D'
    console.log(this.username) // undefined we cannot use it inside the function
}
// thischeck()

const thischeck2 = () =>{
    let username= "SPY_D"
    console.log(this)
}
thischeck2(); // still it reffers to global object