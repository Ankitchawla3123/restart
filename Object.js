// singleton  when we declare with litreal its not a singletone
// if declare with constructor it's a singleton
// Object.create // constructor method

//symbol as an object key
const newsymbol = Symbol("key1")
const newobject ={
    name: "Ankit",
    "full name":'Ankit Chawla',
    age : 21,
    [newsymbol]:"its a symbol", // if we won't put a sq bracket it will count as string
    location : "New Delhi",
    email: "ankit----@gmail.com",
    IsLoggedIn : false,
    LastLoggedIn : ['Monday','Tuesday', 'Wednesday']
}

console.log(newobject.name);
console.log(newobject['name']) // access via string newobject[name] invalid
// console.log(newobject."fullname"); error
console.log(newobject[newsymbol])
console.log(newobject["LastLoggedIn"][2])
newobject["email"]= "@gmail.com"
// console.log(newobject);
// Object.freeze(newobject)
newobject["email"]= "12@gmail.com" // won't change cuz freeze
console.log(newobject["email"])
// for unfreeze use spread operator to create a copy of the object
const newobject2= {... newobject}
// console.log(newobject2)

newobject.yofunction= ()=>{
    console.log('Yooo');
    
}
console.log(newobject.yofunction()); // it will run but also undefined will be shown
console.log(newobject.yofunction) // functionr return back


newobject.yofunction2= function(){  
    console.log( `hello this is my name ${this.name}`);
    
}
// with arrow function it didn't work it will show undefined as it will refer to the parent/ owner of the function rather than the object we wanted
console.log(newobject.yofunction2());



 